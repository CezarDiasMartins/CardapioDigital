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
  selector: 'app-pizza',
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
  templateUrl: './pizza.component.html',
  styleUrl: './pizza.component.scss'
})
export class PizzaComponent {
  constructor(private meta: Meta, private titleService: Title, private carrinhoService: CarrinhoService) {
    this.titleService.setTitle('Pizzas');
    this.meta.updateTag({
      name: 'description',
      content: 'Escolha a suas pizzas preferidas!'
    });
  }
  
  titulo = "Pizzas";
  data = [
    {
      img: 'pizza.avif',
      titulo: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, muçarela, presunto, ovo, azeitona, cebola e orégano.',
      preco: '34,90'
    },
    {
      img: 'pizza.avif',
      titulo: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, muçarela, presunto, ovo, azeitona, cebola e orégano.',
      preco: '34,90'
    },
    {
      img: 'pizza.avif',
      titulo: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, muçarela, presunto, ovo, azeitona, cebola e orégano.',
      preco: '34,90'
    },
    {
      img: 'pizza.avif',
      titulo: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, muçarela, presunto, ovo, azeitona, cebola e orégano.',
      preco: '34,90'
    },
    {
      img: 'pizza.avif',
      titulo: 'Pizza Portuguesa',
      descricao: 'Molho de tomate, muçarela, presunto, ovo, azeitona, cebola e orégano.',
      preco: '34,90'
    },
  ];

  adicionarProdutoNoCarrinho(produto: any) {
    this.carrinhoService.addItem(produto);
  }
}