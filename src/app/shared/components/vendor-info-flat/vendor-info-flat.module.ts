import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorInfoFlatComponent } from './vendor-info-flat.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [VendorInfoFlatComponent],
  exports: [VendorInfoFlatComponent],
  imports: [CommonModule, RouterModule]
})
export class VendorInfoFlatModule {}
