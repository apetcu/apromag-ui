import { Injectable } from '@angular/core';
import { Product } from '../../product/models/product';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartFacadeService } from './cart-facade.service';
import { CartTotal } from '../models/cart-total';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private onCartUpdated: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>(null);
  private cartTotalsSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(private storageService: StorageService, private toasterService: ToastrService, private cartFacadeService: CartFacadeService) {
    this.onCartUpdated.next(this.getItems());
    this.initTotalListener();
  }

  getCartItems(): Observable<Array<CartItem>> {
    return this.onCartUpdated.asObservable();
  }

  getTotal(): Observable<CartTotal> {
    return this.cartTotalsSubject.asObservable();
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

  modifyItem(cartItem: CartItem, operation: CartOperations, quantity?: number) {
    const cartItems = this.getItems();
    const foundItemIndex = cartItems.findIndex((entry) => entry.id === cartItem.id);
    switch (operation) {
      case CartOperations.ADD:
        cartItems[foundItemIndex].quantity++;
        break;
      case CartOperations.SUBSTRACT:
        cartItems[foundItemIndex].quantity--;
        break;
      case CartOperations.SET:
        cartItems[foundItemIndex].quantity = quantity;
        break;
      default:
          break;
    }
    this.setCart(cartItems);
  }

  getItems(): Array<CartItem> {
    const currentItems = this.storageService.getItem(StorageLocations.CART) || [];
    return currentItems.map((cartItem) => new CartItem(cartItem, cartItem.quantity));
  }

  getCurrentVendorId(): number {
    return this.getItems()[0]?.vendorId || null;
  }

  emptyCart() {
    this.setCart([]);
  }


  private setCart(cartItems: Array<CartItem>) {
    this.storageService.setItem(StorageLocations.CART, cartItems);
    this.onCartUpdated.next(cartItems);
  }

  private initTotalListener() {
    this.onCartUpdated.subscribe((products) => {
      if(products && products.length) {
        this.cartFacadeService.calculateTotal(products).subscribe((totals: CartTotal) => {
          this.cartTotalsSubject.next(totals);
        });
      }
    })
  }
}

export enum CartOperations {
  ADD = 'ADD',
  SUBSTRACT = 'SUBSTRACT',
  SET = 'SET',
}
