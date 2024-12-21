import { Component } from '@angular/core';
import { CarrosselComponent } from "../../components/carrossel/carrossel.component";
import { NgOptimizedImage } from '@angular/common';
import { WhatsappComponent } from "../../components/whatsapp/whatsapp.component";
import { CarrinhoComponent } from "../../components/carrinho/carrinho.component";
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarrosselComponent,
    NgOptimizedImage,
    WhatsappComponent,
    CarrinhoComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Cardápio Digital');
    this.meta.updateTag({
      name: 'description',
      content: 'Bem-vindo(a) ao Cardápio Digital. Aqui você terá acesso a todos os produtos de nosso estabelecimento, como pizzas, hambúrgueres, bebidas, porções e muito mais!'
    });
  }

  carrinhoItems: any[] = [];
}
