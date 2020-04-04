import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemSkeletonComponent } from './product-item-skeleton.component';

@NgModule({
  declarations: [ProductItemSkeletonComponent],
  exports: [ProductItemSkeletonComponent],
  imports: [CommonModule]
})
export class ProductItemSkeletonModule {}
