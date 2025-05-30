import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CartComponent {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  viewCart() {
    this.cartItems = this.cartService.getCartItems();
  }

  checkout() {
    const total = this.cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    alert(`Total Bill: $${total}`);
    this.cartService.clearCart();
    this.cartItems = [];
  }
}
