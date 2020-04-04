import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './containers/product/product.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { RelatedProductsComponent } from './components/related-products/related-products.component';
import { ProductListModule } from '../../shared/components/product-list/product-list.module';

@NgModule({
  declarations: [ProductComponent, RelatedProductsComponent],
  imports: [CommonModule, PageTitleModule, ProductListModule]
})
export class ProductModule {}
