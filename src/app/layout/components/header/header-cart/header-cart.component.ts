import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/services/cart.service';
import { CartItem } from '../../../cart/models/cart-item';
import { Observable } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
import { CartTotal } from '../../../cart/models/cart-total';

@Component({
  selector: 'app-header-cart',
  templateUrl: './header-cart.component.html',
  styleUrls: ['./header-cart.component.scss']
})
export class HeaderCartComponent implements OnInit {
  cartDisplayed: boolean = false;
  cartItems: Observable<Array<CartItem>>;
  cartTotal: Observable<CartTotal>;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.initTotalListeners();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.cartDisplayed = false;
      }
    });
  }

  sendOrder() {
    this.hideCart();
    this.router.navigate(['/cart']);
  }

  initTotalListeners() {
    this.cartItems = this.cartService.getCartItems();
    this.cartTotal = this.cartService.getTotal();
  }

  onRemoveItem(cartItem: CartItem): void {
    this.cartService.removeItem(cartItem);
  }

  hideCart() {
    this.cartDisplayed = false;
  }

  cartToggle() {
    this.cartDisplayed = !this.cartDisplayed;
  }
}
