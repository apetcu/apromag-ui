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
import { CartTotal } from '../../models/cart-total';
import { Vendor } from '../../../vendor/models/vendor';
import { ShippingService } from '../../../../shared/services/shipping/shipping.service';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartSummaryForm: CartSummaryForm = new CartSummaryForm();
  shippingLocations: Array<ShippingLocation>;
  cartItems: Array<CartItem>;
  cartTotal: Observable<CartTotal>;
  vendor: Vendor;

  constructor(
    private cartService: CartService,
    private cartFacadeService: CartFacadeService,
    private shippingFacadeService: ShippingFacadeService,
    private shippingService: ShippingService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartTotal = this.cartService.getTotal();
    this.vendor = this.cartService.getCurrentVendor();
    this.cartService.getCartItems().subscribe((items) => {
      this.cartItems = items;
    });
    this.getShippingLocations();
    this.fillUserDetails();
  }

  onCartSubmit(): void {
    this.cartFacadeService
      .submitOrder(this.cartSummaryForm.value, this.cartItems, this.cartService.getCurrentVendorId())
      .subscribe((order) => {
        this.router.navigate(['/cart/finish/' + order.id]);
        this.cartService.emptyCart();
      });
  }

  private fillUserDetails() {
    if (this.userService.isUserLoggedIn()) {
      this.cartSummaryForm.autoFillForm(this.userService.getUser(), this.shippingService.getShippingLocation());
    }
  }

  private getShippingLocations() {
    let vendorShippingLocations = this.vendor.shippingPreferences.map((entry) => entry.locationId);

    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      this.shippingLocations = locations.filter((entry) => vendorShippingLocations.includes(parseInt(entry.id)));
    });
  }
}
