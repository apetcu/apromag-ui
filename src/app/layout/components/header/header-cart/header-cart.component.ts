import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart-item';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {
  cartItems: Array<CartItem> = [];

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartUpdated().subscribe((cartItems: Array<CartItem>) => {
      this.cartItems = cartItems;
    });
  }

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }
}
