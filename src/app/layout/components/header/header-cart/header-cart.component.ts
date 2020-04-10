import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart-item';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {
  cartDisplayed: boolean = false;
  cartItems: Observable<Array<CartItem>>;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.currentCartState();

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.cartDisplayed = false;
      }
    });
  }

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

  hideCart() {
    this.cartDisplayed = false;
  }

  showCart() {
    this.cartDisplayed = true;
  }
}
