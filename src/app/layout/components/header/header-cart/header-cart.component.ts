import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart-item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {
  cartItems: Observable<Array<CartItem>>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartUpdated();
  }

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }
}
