import { Component, Input } from '@angular/core';
import { CarrinhoService } from '../../services/carrinho/carrinho.service';
import { CardComponent } from "../card/card.component";

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  @Input() titulo: string = "";
  @Input() produtos: any[] = [];

  constructor(private carrinhoService: CarrinhoService) {}

  adicionarProdutoNoCarrinho(produto: any) {
    this.carrinhoService.addItem(produto);
  }
}
