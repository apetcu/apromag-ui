import { Component, OnInit } from '@angular/core';
import { CartItem } from '../../models/cart-item';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { ShippingLocation } from '../../../../shared/models/location';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { CartSummaryForm } from './cart-summary-form';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.scss']
})
export class CartSummaryComponent implements OnInit {
  cartSummaryForm: CartSummaryForm = new CartSummaryForm();
  shippingLocations: Observable<Array<ShippingLocation>>;
  cartItems: Array<CartItem>;

  constructor(private cartService: CartService, private shippingFacadeService: ShippingFacadeService) {}

  ngOnInit(): void {
    this.cartService.currentCartState().subscribe((items) => {
      this.cartItems = items;
    });
    this.shippingLocations = this.shippingFacadeService.getShippingLocations();
  }

  onCartSubmit(): void {
    console.log(this.cartItems);
  }
}
