import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingLocationPickerComponent } from './shipping-location-picker.component';

@NgModule({
  declarations: [ShippingLocationPickerComponent],
  exports: [ShippingLocationPickerComponent],
  imports: [CommonModule]
})
export class ShippingLocationPickerModule {}
