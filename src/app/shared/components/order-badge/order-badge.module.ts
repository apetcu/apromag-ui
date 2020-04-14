import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderBadgeComponent } from './order-badge.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [OrderBadgeComponent],
  exports: [OrderBadgeComponent],
  imports: [CommonModule, TranslateModule]
})
export class OrderBadgeModule {}
