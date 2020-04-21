import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { OrderListComponent } from './order-list.component';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [OrderListComponent],
  exports: [OrderListComponent],
  imports: [CommonModule, TranslateModule, RouterModule, PaginatorModule]
})
export class OrderListModule {}
