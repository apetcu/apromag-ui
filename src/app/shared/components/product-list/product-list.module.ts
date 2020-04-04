import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductItemSkeletonModule } from '../product-item-skeleton/product-item-skeleton.module';
import { ProductItemModule } from '../product-item/product-item.module';

@NgModule({
  declarations: [ProductListComponent],
  exports: [ProductListComponent],
  imports: [CommonModule, ProductItemSkeletonModule, ProductItemModule]
})
export class ProductListModule {}
