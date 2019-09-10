import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = []

  constructor() { }

  addToCart(product) {
    this.items.push(product)
  }

  removeToCart(product) {
    delete this.items[product]
  }

  clearCart(){
    this.items = []
    return this.items
  }
}
