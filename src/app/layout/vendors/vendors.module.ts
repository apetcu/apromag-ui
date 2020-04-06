import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendorsComponent } from './containers/vendors/vendors.component';
import { VendorProductsComponent } from './containers/vendor-products/vendor-products.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { VendorComponent } from './components/vendor/vendor.component';
import { RouterModule } from '@angular/router';
import { ProductItemModule } from '../../shared/components/product-item/product-item.module';
import { ProductItemSkeletonModule } from '../../shared/components/product-item-skeleton/product-item-skeleton.module';
import { RatingModule } from '../../shared/components/rating/rating.module';
import { ProductListModule } from '../../shared/components/product-list/product-list.module';
import { DefaultImageModule } from '../../shared/directives/default-image/default-image.module';
import { InfoBoxModule } from '../../shared/components/info-box/info-box.module';

@NgModule({
  declarations: [VendorsComponent, VendorProductsComponent, VendorComponent],
  imports: [
    CommonModule,
    PageTitleModule,
    RouterModule,
    ProductItemModule,
    ProductItemSkeletonModule,
    RatingModule,
    ProductListModule,
    DefaultImageModule,
    InfoBoxModule
  ]
})
export class VendorsModule {}
