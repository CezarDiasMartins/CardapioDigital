import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-painel-adm',
  standalone: true,
  imports: [],
  templateUrl: './painel-adm.component.html',
  styleUrl: './painel-adm.component.scss'
})
export class PainelAdmComponent {
  constructor(private meta: Meta, private titleService: Title) {
    this.titleService.setTitle('Painel Adm');
    this.meta.updateTag({
      name: 'description',
      content: 'Bem-vindo ao Painel Administrativo! Aqui você poderá fazer as atualizações de seu cardápio digital.'
    });
  }
}