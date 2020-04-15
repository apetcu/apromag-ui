import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { CartSummaryForm } from './cart-summary-form';
import { CartFacadeService } from '../../services/cart-facade.service';
import { Router } from '@angular/router';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartSummaryForm: CartSummaryForm = new CartSummaryForm();
  shippingLocations: Observable<Array<ShippingLocation>>;
  cartItems: Array<CartItem>;

  constructor(
    private cartService: CartService,
    private cartFacadeService: CartFacadeService,
    private shippingFacadeService: ShippingFacadeService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.currentCartState().subscribe((items) => {
      this.cartItems = items;
    });
    this.shippingLocations = this.shippingFacadeService.getShippingLocations('');
    if (this.userService.isUserLoggedIn()) {
      this.cartSummaryForm.autoFillUser(this.userService.getUser());
    }
  }

  onCartSubmit(): void {
    this.cartFacadeService
      .submitOrder(this.cartSummaryForm.value, this.cartItems, this.cartService.getCurrentVendorId())
      .subscribe((order) => {
        this.router.navigate(['/cart/finish/' + order.id]);
        this.cartService.emptyCart();
      });
  }
}
