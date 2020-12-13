import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { VendorRegistrationComponent } from './vendor-registration.component';

@NgModule({
  declarations: [VendorRegistrationComponent],
  exports: [VendorRegistrationComponent],
  imports: [CommonModule, ReactiveFormsModule]
})
export class VendorRegistrationModule {}
