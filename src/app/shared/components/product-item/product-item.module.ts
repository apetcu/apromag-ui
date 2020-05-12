import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { RouterModule } from '@angular/router';
import { CurrencyModule } from '../../pipes/currency/currency.module';

@NgModule({
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
  imports: [CommonModule, RouterModule, CurrencyModule]
})
export class ProductItemModule {}
