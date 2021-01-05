import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category } from '../../categories/models/category.model';
import { Product } from '../../product/models/product';
import { Subscription } from 'rxjs';
import { ProductListConfig, ProductListDisplayModes } from '../../../shared/components/product-list/product-list-config';
import { CategoriesFacadeService } from '../../categories/services/categories-facade.service';
import { ActivatedRoute } from '@angular/router';
import { SearchFacadeService } from '../services/search-facade.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  products: Array<Product>;
  totalProducts: number;
  productsLoading: boolean = true;
  query: string = '';

  routeParamsSubscription: Subscription;
  productsSubscription: Subscription;

  productListConfig: ProductListConfig = {
    totalPages: 100,
    totalRecords: 1000,
    currentPage: 1,
    defaultDisplayMode: ProductListDisplayModes.GRID,
    displayHeader: true,
    paginated: false,
    itemsPerRow: 4
  };

  constructor(private searchFacadeService: SearchFacadeService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.routeParamsSubscription = this.route.params.subscribe((params) => {
      this.query = params.query;
      this.getCategoryProducts(params.query);
    });
  }

  ngOnDestroy(): void {
    this.routeParamsSubscription && this.routeParamsSubscription.unsubscribe();
    this.productsSubscription && this.productsSubscription.unsubscribe();
  }

  private getCategoryProducts(query: string) {
    this.productsLoading = true;
    this.productsSubscription = this.searchFacadeService.getProductsByQuery(query).subscribe((products) => {
      this.productsLoading = false;
      this.products = products.data;
      this.totalProducts = products.pagination.totalCount;
    });
  }
}
