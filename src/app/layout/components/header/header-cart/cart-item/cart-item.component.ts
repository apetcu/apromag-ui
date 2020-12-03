import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartItem } from '../../../../cart/models/cart-item';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input()
  cartItem: CartItem;

  @Output()
  onRemoveItem: EventEmitter<CartItem> = new EventEmitter<CartItem>(null);

  constructor() {}

  ngOnInit(): void {}

  removeItem($event, cartItem: CartItem) {
    $event.stopPropagation();
    this.onRemoveItem.emit(cartItem);
  }
}
