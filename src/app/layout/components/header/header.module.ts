import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {HeaderCartComponent} from "./header-cart/header-cart.component";
import { HeaderAccountComponent } from './header-account/header-account.component';



@NgModule({
  declarations: [HeaderComponent, HeaderCartComponent, HeaderAccountComponent],
  exports: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class HeaderModule { }
