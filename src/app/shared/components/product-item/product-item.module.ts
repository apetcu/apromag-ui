import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProductItemComponent],
  exports: [ProductItemComponent],
  imports: [CommonModule, RouterModule]
})
export class ProductItemModule {}
