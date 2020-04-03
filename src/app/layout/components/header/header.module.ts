import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "./header.component";
import {RouterModule} from "@angular/router";
import {HeaderCartComponent} from "./header-cart/header-cart.component";



@NgModule({
  declarations: [HeaderComponent, HeaderCartComponent],
  exports: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule
  ]
})
export class HeaderModule { }
