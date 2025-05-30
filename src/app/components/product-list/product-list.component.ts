
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'GPU', price: 500, image: 'assets/gpu.jpg' },
    { id: 2, name: 'CPU', price: 300, image: 'assets/cpu.jpg' },
    { id: 3, name: 'RAM', price: 100, image: 'assets/ram.jpg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    alert(`${product.name} added to cart!`);
  }
}
