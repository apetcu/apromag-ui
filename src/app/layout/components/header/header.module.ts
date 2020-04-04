import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {HeaderCartComponent} from "./header-cart/header-cart.component";
import { HeaderAccountComponent } from './header-account/header-account.component';
import { CartItemComponent } from './header-cart/cart-item/cart-item.component';



@NgModule({
  declarations: [HeaderComponent, HeaderCartComponent, HeaderAccountComponent, CartItemComponent],
  exports: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class HeaderModule { }
