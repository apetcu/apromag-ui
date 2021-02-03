import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderStatusHistoryComponent } from './order-status-history.component';
import { CurrencyModule } from '../../pipes/currency/currency.module';
import { TranslateModule } from '@ngx-translate/core';
import { OrderBadgeModule } from '../order-badge/order-badge.module';

@NgModule({
  declarations: [OrderStatusHistoryComponent],
  exports: [OrderStatusHistoryComponent],
  imports: [CommonModule, CurrencyModule, TranslateModule, OrderBadgeModule]
})
export class OrderStatusHistoryModule {}
