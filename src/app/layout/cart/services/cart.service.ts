import { Injectable } from '@angular/core';
import { Product } from '../../product/models/product';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private onCartUpdated: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>(null);

  constructor(private storageService: StorageService, private toasterService: ToastrService) {
    this.onCartUpdated.next(this.getItems());
  }

  getCartUpdated(): Observable<Array<CartItem>> {
    return this.onCartUpdated.asObservable();
  }

  addItem(product: Product, quantity: number) {
    const cartItems = this.getItems();
    const foundItemIndex = cartItems.findIndex((entry) => entry.id === product.id);
    if (foundItemIndex > -1) {
      cartItems[foundItemIndex].quantity += quantity;
    } else {
      cartItems.push(new CartItem(product, quantity));
    }

    this.toasterService.success('Produsul a fost adaugat in cos', '', {
      positionClass: 'toast-bottom-right',
      timeOut: 5000
    });
    this.setCart(cartItems);
  }

  removeItem(cartItem: CartItem): void {
    const cartItems = this.getItems();
    const foundItemIndex = cartItems.findIndex((entry) => entry.id === cartItem.id);
    cartItems.splice(foundItemIndex, 1);
    this.setCart(cartItems);
  }

  getItems(): Array<CartItem> {
    const currentItems = this.storageService.getItem(StorageLocations.CART) || [];
    return currentItems.map((cartItem) => new CartItem(cartItem, cartItem.quantity));
  }

  private setCart(cartItems: Array<CartItem>) {
    this.storageService.setItem(StorageLocations.CART, cartItems);
    this.onCartUpdated.next(cartItems);
  }
}
