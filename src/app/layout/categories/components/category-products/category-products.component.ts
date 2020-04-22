import { Component, OnInit } from '@angular/core';
import { ProductListConfig, ProductListDisplayModes } from '../../../../shared/components/product-list/product-list-config';
import { Vendor } from '../../../vendor/models/vendor';
import { Product } from '../../../product/models/product';
import { Category } from '../../models/category.model';
import { VendorsFacadeService } from '../../../vendor/services/vendors-facade.service';
import { ActivatedRoute } from '@angular/router';
import { CategoriesFacadeService } from '../../services/categories-facade.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit {
  category: Category;
  products: Array<Product>;
  productsLoading: boolean = true;
  categoryInfoLoading: boolean = true;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: true,
    paginated: true
  };

  constructor(private categoriesFacadeService: CategoriesFacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const categoryId = parseInt(params.categoryId, 10);
      this.getCategoryDetails(categoryId);
      this.getCategoryProducts(categoryId);
    });
  }

  private getCategoryDetails(id: number) {
    this.categoriesFacadeService.getCategoryById(id).subscribe((categoryInfo) => {
      this.categoryInfoLoading = false;
      this.category = categoryInfo;
    });
  }
  private getCategoryProducts(id: number) {
    this.categoriesFacadeService.getCategoryProducts(id).subscribe((products) => {
      this.productsLoading = false;
      this.products = products.content;
    });
  }
}
