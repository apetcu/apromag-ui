import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShippingLocationPickerComponent } from './shipping-location-picker.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ShippingLocationPickerComponent],
  exports: [ShippingLocationPickerComponent],
  imports: [CommonModule, TranslateModule]
})
export class ShippingLocationPickerModule {}
