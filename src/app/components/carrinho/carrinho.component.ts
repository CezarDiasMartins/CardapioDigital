import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [
    NgOptimizedImage,
    FormsModule
  ],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent {
  opcaoSelecionada: string = '';
  carrinhoItems: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinhoItems = this.carrinhoService.getItems();
  }

  get total(): string {
    return this.carrinhoItems.reduce((acc, item) => {
      return acc + item.preco * item.quantidade;
    }, 0).toFixed(2).replace('.', ',');
  }

  get totalQuantidade(): number {
    return this.carrinhoItems.reduce((acc, item) => acc + item.quantidade, 0);
  }
  
  openModal() {
    const modalCarrinho = document.getElementById('modalCarrinho');
    modalCarrinho!.style.display = 'flex';
  }

  closeModal() {
    const modalCarrinho = document.getElementById('modalCarrinho');
    modalCarrinho!.style.display = 'none';
    this.limparErros();
    this.limparInputs();
  }
  
  incrementoItem(item: any) {
    this.carrinhoService.incrementoItem(item);
  }
  
  decrementoItem(item: any) {
    this.carrinhoService.decrementoItem(item);
  }

  confirmarPedido() {
    var erro = false;

    const data = new Date();
    const hora = data.getHours();

    // if(hora < 18 && hora > 23) {
    //   const estabelecimentoFechado = document.getElementById('estabelecimentoFechado');
    //   estabelecimentoFechado!.style.display = 'block';
    //   erro = true;
    // }

    if(this.carrinhoItems.length <= 0) {
      const carrinhoVazio = document.getElementById('carrinhoVazio');
      carrinhoVazio!.style.display = 'block';
      erro = true;
    }

    if(this.opcaoSelecionada.trim() == '') {
      const estabelecimentoDelivery = document.getElementById('estabelecimentoDelivery');
      estabelecimentoDelivery!.style.display = 'block';
      erro = true;
    }

    if(this.opcaoSelecionada == 'estabelecimento') {
      const mesa = document.getElementById('mesa') as HTMLInputElement;

      if (mesa.value.trim() === '') {
        const mesaNaoInformada = document.getElementById('mesaNaoInformada')!;
        mesaNaoInformada.style.display = 'block';
        erro = true;
      }
    }

    if(this.opcaoSelecionada == 'delivery') {
      const endereco = document.getElementById('endereco') as HTMLInputElement;
      const pagamento = document.getElementById('pagamento') as HTMLInputElement;
      const enderecoNaoInformado = document.getElementById('enderecoNaoInformado');
      const pagamentoNaoInformado = document.getElementById('pagamentoNaoInformado');


      if (endereco.value.trim() === '') {
        enderecoNaoInformado!.style.display = 'block';
        erro = true;
      } else {
        enderecoNaoInformado!.style.display = 'none';
      }

      if (pagamento.value.trim() === '') {
        pagamentoNaoInformado!.style.display = 'block';
        erro = true;
      } else {
        pagamentoNaoInformado!.style.display = 'none';
      }
    }

    if(erro) return;

    if(this.opcaoSelecionada === 'estabelecimento') this.envioEstabelecimento(this.carrinhoItems, this.total);
    if(this.opcaoSelecionada === 'delivery') this.envioDelivery(this.carrinhoItems, this.total);
    
    this.limparCarrinho();
    this.closeModal();
  }

  envioEstabelecimento(carrinhoItems: any[], total: string) {
    let itens: string = '';
    this.carrinhoItems.forEach(item => {
      itens += `(${item.quantidade}) ${item.titulo}\n`;
    });

    const telefone = "67991255821";
    const mesa = document.getElementById('mesa') as HTMLInputElement;
    const mesaInformada = mesa.value

    const mensagem = encodeURIComponent(`ESTABELECIMENTO\nItens do Pedido:\n${itens}\nNúmero da mesa: ${mesaInformada}`);

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  }

  envioDelivery(carrinhoItems: any[], total: string) {
    let itens: string = '';
    this.carrinhoItems.forEach(item => {
      itens += `(${item.quantidade}) ${item.titulo}\n`;
    });

    const telefone = "67991255821";
    const pagamento = document.getElementById('pagamento') as HTMLInputElement;
    const pagamentoInformado = pagamento.value;
    const endereco = document.getElementById('endereco') as HTMLInputElement;
    const enderecoInformado = endereco.value;
    
    const troco = document.getElementById('troco') as HTMLInputElement;
    let mensagem = '';

    if (troco.value.trim() === '') {
      mensagem = encodeURIComponent(`DELIVERY\nItens do Pedido:\n${itens}\nForma de Pagamento: ${pagamentoInformado}\nEndereço: ${enderecoInformado}\nTotal: R$${total} + Frete`);
    } else {
      const trocoInformado = troco.value;
      mensagem = encodeURIComponent(`DELIVERY\nItens do Pedido:\n${itens}\nForma de Pagamento: ${pagamentoInformado}\nTroco: ${troco.value}\nEndereço: ${enderecoInformado}\nTotal: R$${total} + Frete`);
    }

    window.open(`https://wa.me/${telefone}?text=${mensagem}`, "_blank");
  }

  limparCarrinho() {
    this.limparInputs();
    this.limparErros();
    this.carrinhoService.clearCarrinho();
    this.carrinhoItems = this.carrinhoService.getItems();
  }

  limparInputs() {
    const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>('input, textarea');
    inputs.forEach(input => {
      input.value = '';
    });

    this.opcaoSelecionada = '';
  }

  limparErros() {
    const erros = document.querySelectorAll('.erro');
    erros.forEach(erro => {
      (erro as HTMLElement).style.display = 'none';
    });
  }

  somenteNumeros(event: KeyboardEvent) {
    const codigoTecla = event.key;
  
    if (!/^[0-9]$/.test(codigoTecla) && 
        codigoTecla !== 'Backspace' && 
        codigoTecla !== 'Tab' && 
        codigoTecla !== 'ArrowLeft' && 
        codigoTecla !== 'ArrowRight' && 
        codigoTecla !== 'Delete') {
      event.preventDefault();
    }
  }
}