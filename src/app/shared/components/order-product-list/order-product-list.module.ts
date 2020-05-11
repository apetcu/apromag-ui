import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderProductListComponent } from './order-product-list.component';
import { CurrencyModule } from '../../pipes/currency/currency.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [OrderProductListComponent],
  exports: [OrderProductListComponent],
  imports: [CommonModule, CurrencyModule, TranslateModule, RouterModule]
})
export class OrderProductListModule {}
