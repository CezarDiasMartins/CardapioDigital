import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatCardModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() img: string = "";
  @Input() titulo: string = "";
  @Input() descricao: string = "";
  @Input() preco: string = "";

  @Output() addAoCarrinhoEvent = new EventEmitter<any>();

  addAoCarrinho() {
    const product = {
      titulo: this.titulo,
      preco: parseFloat(this.preco.toString().replace(',', '.'))
    };
    this.addAoCarrinhoEvent.emit(product);
  }
}