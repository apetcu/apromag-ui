import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderSummaryComponent } from './order-summary.component';
import { CurrencyModule } from '../../pipes/currency/currency.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OrderSummaryComponent],
  exports: [OrderSummaryComponent],
  imports: [CommonModule, CurrencyModule, TranslateModule]
})
export class OrderSummaryModule {}
