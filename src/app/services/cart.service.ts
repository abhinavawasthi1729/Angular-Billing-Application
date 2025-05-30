import { Injectable } from '@angular/core';
import { CartItem, Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: { [id: number]: CartItem } = {};

  addToCart(product: Product): void {
    if (this.cart[product.id]) {
      this.cart[product.id].quantity++;
    } else {
      this.cart[product.id] = { product, quantity: 1 };
    }
  }

  getCartItems(): CartItem[] {
    return Object.values(this.cart);
  }

  clearCart(): void {
    this.cart = {};
  }
}
