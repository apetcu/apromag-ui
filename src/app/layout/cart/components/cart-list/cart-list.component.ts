import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../product/models/product';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit {
  @Input()
  cartProducts: Array<CartItem>;

  constructor() {}

  ngOnInit(): void {}
}
