import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RouterModule } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';
import { CartRoutingModule } from './cart-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartSummaryComponent],
  imports: [CommonModule, PageTitleModule, RouterModule, CartRoutingModule, ReactiveFormsModule]
})
export class CartModule {}
