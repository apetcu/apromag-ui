import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListConfig, ProductListDisplayModes } from '../../../../shared/components/product-list/product-list-config';
import { Product } from '../../../product/models/product';
import { Category } from '../../models/category.model';
import { ActivatedRoute } from '@angular/router';
import { CategoriesFacadeService } from '../../services/categories-facade.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.scss']
})
export class CategoryProductsComponent implements OnInit, OnDestroy {
  category: Category;
  products: Array<Product>;
  totalProducts: number;
  productsLoading: boolean = true;
  categoryInfoLoading: boolean = true;

  routeParamsSubscription: Subscription;
  productsSubscription: Subscription;
  detailsSubscription: Subscription;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: true,
    paginated: false,
    itemsPerRow: 4
  };

  constructor(private categoriesFacadeService: CategoriesFacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      const categoryId = parseInt(params.categoryId, 10);
      this.getCategoryDetails(categoryId);
      this.getCategoryProducts(categoryId);
    });
  }

  ngOnDestroy(): void {
    this.detailsSubscription && this.detailsSubscription.unsubscribe();
    this.productsSubscription && this.productsSubscription.unsubscribe();
    this.routeParamsSubscription && this.routeParamsSubscription.unsubscribe();
  }

  private getCategoryDetails(id: number) {
    this.categoryInfoLoading = true;
    this.detailsSubscription = this.categoriesFacadeService.getCategoryById(id).subscribe((categoryInfo) => {
      this.categoryInfoLoading = false;
      this.category = categoryInfo;
    });
  }
  private getCategoryProducts(id: number) {
    this.productsLoading = true;
    this.productsSubscription = this.categoriesFacadeService.getCategoryProducts(id).subscribe((products) => {
      this.productsLoading = false;
      this.products = products.data;
      this.totalProducts = products.totalElements;
    });
  }
}
