import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './containers/cart/cart.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartComponent],
  imports: [CommonModule, PageTitleModule, RouterModule]
})
export class CartModule {}
