import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private carrinhoKey = 'carrinhoItems'; // chave para o LocalStorage
  private carrinhoItems: any[] = [];

  // constructor() { 
  //   // Carregar itens do carrinho do LocalStorage ao iniciar o serviço
  //   const storedCarrinho = localStorage.getItem(this.carrinhoKey);
  //   if (storedCarrinho) {
  //     this.carrinhoItems = JSON.parse(storedCarrinho);
  //   }
  // }

  constructor() {
    // Verifica se o código está rodando no navegador
    if (typeof window !== 'undefined') {
      // Carregar itens do carrinho do LocalStorage ao iniciar o serviço
      const storedCarrinho = localStorage.getItem(this.carrinhoKey);
      if (storedCarrinho) {
        this.carrinhoItems = JSON.parse(storedCarrinho);
      }
    } else {
      // Código rodando no servidor (SSR), então não faz nada com o localStorage
      this.carrinhoItems = []; // ou outra ação que faça sentido para seu serviço
    }
  }

  // Atualiza o LocalStorage toda vez que o carrinho é alterado
  private atualizarLocalStorage() {
    localStorage.setItem(this.carrinhoKey, JSON.stringify(this.carrinhoItems));
  }

  getItems() {
    return this.carrinhoItems;
  }

  addItem(produto: any) {
    const existingItem = this.carrinhoItems.find(item => item.titulo === produto.titulo);
    if (existingItem) {
      existingItem.quantidade++;
    } else {
      produto.quantidade = 1;
      this.carrinhoItems.push(produto);
    }

    this.atualizarLocalStorage();
  }

  removeItem(produto: any) {
    const itemIndex = this.carrinhoItems.findIndex(item => item.titulo === produto.titulo);
    if (itemIndex > -1) {
      this.carrinhoItems.splice(itemIndex, 1);
      this.atualizarLocalStorage();
    }
  }

  clearCarrinho() {
    this.carrinhoItems = [];
    this.atualizarLocalStorage();
  }

  incrementoItem(item: any) {
    item.quantidade++;
    this.atualizarLocalStorage();
  }

  decrementoItem(item: any) {
    item.quantidade--;
    if(item.quantidade <= 0) this.removeItem(item);
    this.atualizarLocalStorage();
  }
}