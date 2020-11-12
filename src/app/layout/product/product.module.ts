import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './containers/product/product.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { ProductListModule } from '../../shared/components/product-list/product-list.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { CurrencyModule } from '../../shared/pipes/currency/currency.module';
import { VendorModule } from '../vendor/vendor.module';

@NgModule({
  declarations: [ProductComponent, RelatedProductsComponent],
  imports: [
    CommonModule,
    PageTitleModule,
    ProductListModule,
    ReactiveFormsModule,
    TranslateModule,
    RouterModule,
    CurrencyModule,
    VendorModule
  ]
})
export class ProductModule {}
