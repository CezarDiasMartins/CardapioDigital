import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BtnVoltarComponent } from "../../components/btn-voltar/btn-voltar.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { CarrinhoComponent } from "../../components/carrinho/carrinho.component";
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { CardsComponent } from "../../components/cards/cards.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hamburguer',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    BtnVoltarComponent,
    WhatsappComponent,
    CarrinhoComponent,
    CardsComponent
],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hamburguer.component.html',
  styleUrl: './hamburguer.component.scss'
})
export class HamburguerComponent {
  constructor(private meta: Meta, private titleService: Title, private carrinhoService: CarrinhoService) {
    this.titleService.setTitle('Hambúrgueres');
    this.meta.updateTag({
      name: 'description',
      content: 'Escolha a seus hambúrgueres preferidos.'
    });
  }

  titulo = "Hambúrgueres";
  data = [
    {
      img: 'hamburguer.avif',
      titulo: 'X-Salada',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '24,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Salada',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '24,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Salada',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '24,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Salada',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '24,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Salada',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '24,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Tudo',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '32,90'
    },
    {
      img: 'hamburguer.avif',
      titulo: 'X-Tudo',
      descricao: 'Pão, hambúrguer, alface, tomate, presunto, mussarela.',
      preco: '32,90'
    }
  ];

  adicionarProdutoNoCarrinho(produto: any) {
    this.carrinhoService.addItem(produto);
  }
}