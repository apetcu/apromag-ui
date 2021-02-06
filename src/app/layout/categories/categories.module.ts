import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RouterModule } from '@angular/router';
import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoryProductsComponent } from './components/category-products/category-products.component';
import { ProductListModule } from '../../shared/components/product-list/product-list.module';
import { InfoBoxModule } from '../../shared/components/info-box/info-box.module';
import { VendorInfoFlatModule } from '../../shared/components/vendor-info-flat/vendor-info-flat.module';
import { ProductItemSkeletonModule } from '../../shared/components/product-item-skeleton/product-item-skeleton.module';

@NgModule({
  declarations: [CategoriesComponent, CategoryListComponent, CategoryProductsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PageTitleModule,
    CategoriesRoutingModule,
    ProductListModule,
    InfoBoxModule,
    VendorInfoFlatModule,
    ProductItemSkeletonModule
  ]
})
export class CategoriesModule {}
