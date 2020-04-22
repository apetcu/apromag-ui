import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartOperations, CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input()
  cartProducts: Array<CartItem>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  onCartAdd(cartItem: CartItem) {
    this.cartService.modifyItem(cartItem, CartOperations.ADD);
  }

  onCartSubstract(cartItem: CartItem) {
    this.cartService.modifyItem(cartItem, CartOperations.SUBSTRACT);
  }

  onCartBlur(quantity: number, cartItem: CartItem) {
    this.cartService.modifyItem(cartItem, CartOperations.SET, quantity);
  }
}
