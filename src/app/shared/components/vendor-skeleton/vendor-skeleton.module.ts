import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorSkeletonComponent } from './vendor-skeleton.component';

@NgModule({
  declarations: [VendorSkeletonComponent],
  exports: [VendorSkeletonComponent],
  imports: [CommonModule]
})
export class VendorSkeletonModule {}
