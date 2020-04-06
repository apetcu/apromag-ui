import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartItems: Observable<Array<CartItem>>;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.currentCartState();
  }
}
