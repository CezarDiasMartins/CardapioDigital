import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BtnVoltarComponent } from "../../components/btn-voltar/btn-voltar.component";
import { CarrinhoComponent } from "../../components/carrinho/carrinho.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { CardsComponent } from "../../components/cards/cards.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-porcao',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    BtnVoltarComponent,
    CarrinhoComponent,
    WhatsappComponent,
    CardsComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './porcao.component.html',
  styleUrl: './porcao.component.scss'
})
export class PorcaoComponent {
  constructor(private meta: Meta, private titleService: Title, private carrinhoService: CarrinhoService) {
    this.titleService.setTitle('Porções');
    this.meta.updateTag({
      name: 'description',
      content: 'Escolha a suas porções preferidas!'
    });
  }

  titulo = "Porções";
  data = [
    {
      img: 'porcao.avif',
      titulo: 'Batata Frita',
      descricao: 'Porção de Batata Frita 350g',
      preco: '28,99'
    },
    {
      img: 'porcao.avif',
      titulo: 'Batata Frita',
      descricao: 'Porção de Batata Frita 350g',
      preco: '28,99'
    },
    {
      img: 'porcao.avif',
      titulo: 'Batata Frita',
      descricao: 'Porção de Batata Frita 350g',
      preco: '28,99'
    },
    {
      img: 'porcao.avif',
      titulo: 'Batata Frita',
      descricao: 'Porção de Batata Frita 350g',
      preco: '28,99'
    },
    {
      img: 'porcao.avif',
      titulo: 'Batata Frita',
      descricao: 'Porção de Batata Frita 350g',
      preco: '28,99'
    },
  ];

  adicionarProdutoNoCarrinho(produto: any) {
    this.carrinhoService.addItem(produto);
  }
}