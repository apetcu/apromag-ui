import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartItem } from '../../cart/models/cart-item';
import { CartService } from '../../cart/services/cart.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-mobile-cart',
  templateUrl: './mobile-cart.component.html',
  styleUrls: ['./mobile-cart.component.scss']
})
export class MobileCartComponent implements OnInit {
  cartItems: Observable<Array<CartItem>>;
  cartDisplayed: boolean = true;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {
    this.cartDisplayed = this.router.url !== '/cart';
    this.initTotalListeners();
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.cartDisplayed = event.url !== '/cart';
      }
    });
  }

  initTotalListeners() {
    this.cartItems = this.cartService.getCartItems();
  }

  redirectToCart() {
    this.router.navigate(['/cart']);
  }
}
