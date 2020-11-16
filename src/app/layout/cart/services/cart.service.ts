import { Injectable } from '@angular/core';
import { Product } from '../../product/models/product';
import { StorageService } from '../../../shared/services/storage/storage.service';
import { StorageLocations } from '../../../shared/services/storage/storage-locations';
import { CartItem } from '../models/cart-item';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { CartFacadeService } from './cart-facade.service';
import { CartTotal } from '../models/cart-total';
import { Vendor } from '../../vendor/models/vendor';
import { AlertService } from '../../../shared/services/alert/alert.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject: BehaviorSubject<Array<CartItem>> = new BehaviorSubject<Array<CartItem>>(null);
  private cartTotalsSubject: BehaviorSubject<CartTotal> = new BehaviorSubject<CartTotal>(null);
  private currentVendorSubject: BehaviorSubject<Vendor> = new BehaviorSubject<Vendor>(null);

  constructor(
    private storageService: StorageService,
    private toasterService: ToastrService,
    private cartFacadeService: CartFacadeService,
    private alertService: AlertService
  ) {
    this.cartItemsSubject.next(this.getLocalStorageItems());
    this.initTotalListener();
  }

  getCartItems(): Observable<Array<CartItem>> {
    return this.cartItemsSubject.asObservable();
  }

  getTotal(): Observable<CartTotal> {
    return this.cartTotalsSubject.asObservable();
  }

  getCurrentVendor(): Vendor {
    return this.currentVendorSubject.value;
  }

  setCurrentVendor(vendor: Vendor): void {
    this.currentVendorSubject.next(vendor);
  }

  getCurrentCartItems(): Array<CartItem> {
    return this.cartItemsSubject.value;
  }

  checkAndSetCurrentVendor(vendor: Vendor): Observable<boolean> {
    const currentVendor: Vendor = this.getCurrentVendor();
    if (currentVendor && currentVendor.id !== vendor.id) {
      return this.alertService
        .show({
          title: 'Dorești să creezi o comandă nouă?',
          text:
            'Comanda actuala contine produse de la ' +
            currentVendor.businessName +
            '. Pentru a comanda de la ' +
            vendor.businessName +
            ' trebuie sa creezi o comanda noua',
          showCancelButton: true,
          confirmButtonColor: '#2f2f2f',
          cancelButtonColor: '#28a745',
          confirmButtonText: 'Comanda noua',
          cancelButtonText: 'Continua comanda'
        })
        .pipe(
          map((response) => {
            if (response.value) {
              this.emptyCart();
              this.setCurrentVendor(vendor);
              return true;
            }
          })
        );
    } else {
      return of(null);
    }
  }

  addItem(product: Product, quantity: number) {
    this.checkAndSetCurrentVendor(product.vendor).subscribe(() => {
      const cartItems = this.getLocalStorageItems();
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
    });
  }

  removeItem(cartItem: CartItem): void {
    const cartItems = this.getLocalStorageItems();
    const foundItemIndex = cartItems.findIndex((entry) => entry.id === cartItem.id);
    cartItems.splice(foundItemIndex, 1);
    this.setCart(cartItems);
  }

  modifyItem(cartItem: CartItem, operation: CartOperations, quantity?: number) {
    const cartItems = this.getLocalStorageItems();
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

  getCurrentVendorId(): number {
    return this.getCurrentCartItems()[0].vendorId || null;
  }

  emptyCart() {
    this.setCart([]);
    this.currentVendorSubject.next(null);
  }

  private setCart(cartItems: Array<CartItem>) {
    this.storageService.setItem(StorageLocations.CART, cartItems);
    this.cartItemsSubject.next(cartItems);
  }

  private getLocalStorageItems(): Array<CartItem> {
    const currentItems = this.storageService.getItem(StorageLocations.CART) || [];
    if (currentItems.length) {
      this.setCurrentVendor(currentItems[0].vendor);
    }
    return currentItems.map((cartItem) => new CartItem(cartItem, cartItem.quantity));
  }

  private initTotalListener() {
    this.cartItemsSubject.subscribe((products) => {
      if (products && products.length) {
        this.cartFacadeService.calculateTotal(products).subscribe((totals: CartTotal) => {
          this.cartTotalsSubject.next(totals);
        });
      }
    });
  }
}

export enum CartOperations {
  ADD = 'ADD',
  SUBSTRACT = 'SUBSTRACT',
  SET = 'SET'
}
