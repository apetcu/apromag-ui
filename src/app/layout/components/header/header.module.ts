import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';
import { HeaderCartComponent } from './header-cart/header-cart.component';
import { HeaderAccountComponent } from './header-account/header-account.component';
import { CartItemComponent } from './header-cart/cart-item/cart-item.component';
import { ClickOutsideModule } from '../../../shared/directives/click-outside/click-outside.module';
import { DefaultImageModule } from '../../../shared/directives/default-image/default-image.module';
import { ShippingLocationPickerModule } from '../../../shared/components/shipping-location-picker/shipping-location-picker.module';
import { CurrencyModule } from '../../../shared/pipes/currency/currency.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HeaderComponent, HeaderCartComponent, HeaderAccountComponent, CartItemComponent],
  exports: [HeaderComponent],
  imports: [
    RouterModule,
    CommonModule,
    ClickOutsideModule,
    DefaultImageModule,
    ShippingLocationPickerModule,
    CurrencyModule,
    TranslateModule
  ]
})
export class HeaderModule {}
