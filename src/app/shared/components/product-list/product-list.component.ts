import { Component, Input, OnInit } from '@angular/core';
import { ProductListConfig, ProductListDisplayModes } from './product-list-config';
import { Product } from '../../../layout/product/models/product';
import { CartService } from '../../../layout/cart/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<Product>;
  @Input()
  pagination: any;
  @Input()
  listLoading: boolean = true;
  @Input()
  config: ProductListConfig;

  displayType: ProductListDisplayModes = ProductListDisplayModes.GRID;

  columnMappings: any = {
    2: 'col-lg-6',
    3: 'col-lg-4',
    4: 'col-lg-3',
    6: 'col-lg-6'
  };

  rowClass: string = 'col-lg-4';

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.displayType = this.config.defaultDisplayMode;
    if (this.config.itemsPerRow) {
      this.rowClass = this.columnMappings[this.config.itemsPerRow];
    }
  }

  setListType(type: string) {
    this.displayType = type as ProductListDisplayModes;
  }

  addToCart(product: Product) {
    this.cartService.addItem(product, 1);
  }
}
