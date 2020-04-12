import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RouterModule } from '@angular/router';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';
import { CartRoutingModule } from './cart-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CartFinishComponent } from './containers/cart-finish/cart-finish.component';

@NgModule({
  declarations: [CartComponent, CartListComponent, CartSummaryComponent, CartFinishComponent],
  imports: [CommonModule, PageTitleModule, RouterModule, CartRoutingModule, ReactiveFormsModule]
})
export class CartModule {}
