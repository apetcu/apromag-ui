import { Component, Input, OnInit } from '@angular/core';
import { ProductListConfig, ProductListDisplayModes } from '../../../../shared/components/product-list/product-list-config';
import { Product } from '../../models/product';

@Component({
  selector: 'app-related-products',
  templateUrl: './related-products.component.html',
  styleUrls: ['./related-products.component.scss']
})
export class RelatedProductsComponent implements OnInit {
  @Input()
  productListLoading = false;
  @Input()
  products: Array<Product>;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: false,
    paginated: false
  };

  constructor() {}

  ngOnInit(): void {}
}
