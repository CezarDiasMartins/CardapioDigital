import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BtnVoltarComponent } from "../../components/btn-voltar/btn-voltar.component";
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { CarrinhoComponent } from "../../components/carrinho/carrinho.component";
import { CardsComponent } from "../../components/cards/cards.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bebida',
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
  templateUrl: './bebida.component.html',
  styleUrl: './bebida.component.scss'
})
export class BebidaComponent {
  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Bebidas');
    this.meta.updateTag({
      name: 'description',
      content: 'Escolha a suas bebidas preferidas.'
    });
  }

  titulo = "Bebidas";
  data = [
    {
      img: 'coca-cola.avif',
      titulo: 'Coca-Cola',
      descricao: 'Refrigerante Coca-Cola lata 350ml.',
      preco: '7,90'
    },
    {
      img: 'coca-cola.avif',
      titulo: 'Coca-Cola',
      descricao: 'Refrigerante Coca-Cola lata 350ml.',
      preco: '7,90'
    },
    {
      img: 'coca-cola.avif',
      titulo: 'Coca-Cola',
      descricao: 'Refrigerante Coca-Cola lata 350ml.',
      preco: '7,90'
    },
    {
      img: 'coca-cola.avif',
      titulo: 'Coca-Cola',
      descricao: 'Refrigerante Coca-Cola lata 350ml.',
      preco: '7,90'
    },
    {
      img: 'coca-cola.avif',
      titulo: 'Coca-Cola',
      descricao: 'Refrigerante Coca-Cola lata 350ml.',
      preco: '7,90'
    },
  ];
}