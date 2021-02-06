import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CategoriesApiService } from './categories-api.service';
import { Category } from '../models/category.model';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { Product } from '../../product/models/product';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';
import { ProductsFacadeService } from '../../product/services/products-facade.service';
import { VendorProductsGroup } from '../models/category-products.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacadeService {
  private cachedCategories: BehaviorSubject<Array<Category>> = new BehaviorSubject<Array<Category>>(null);
  private flattenedCategories: BehaviorSubject<Array<Category>> = new BehaviorSubject<Array<Category>>(null);

  constructor(private categoriesApiService: CategoriesApiService, private productsFacadeService: ProductsFacadeService) {}

  getCategoryById(id: number): Observable<Category> {
    if (this.cachedCategories.value) {
      return of(this.flattenedCategories.value.find((category) => category.id === id));
    }
    return this.categoriesApiService.getById(id).pipe(map((category) => new Category(category)));
  }

  getCategoryProductsGroupedByVendor(id: number, pagination: PaginationInfo): Observable<Array<VendorProductsGroup>> {
    return this.categoriesApiService.getProducts(id, pagination).pipe(
      this.productsFacadeService.mapProductsToDomainModel(),
      this.productsFacadeService.mapGroupProductsByVendor()
    );
  }

  getCategoryProducts(id: number): Observable<PaginatedResponse<Product>> {
    return this.categoriesApiService.getProducts(id, new PaginationInfo()).pipe(this.productsFacadeService.mapProductsToDomainModel());
  }

  getCategories(): Observable<Array<Category>> {
    if (this.cachedCategories.value) {
      return this.cachedCategories.asObservable();
    }
    return this.categoriesApiService.getAll().pipe(
      this.mapCategoriesToDomainModel(),
      map((categories) => {
        this.cacheCategories(categories);
        return categories;
      })
    );
  }

  getHomepageCategories(): Observable<Array<Category>> {
    return this.flattenedCategories.asObservable().pipe(
      filter((categories) => categories !== null),
      map((categories) => {
        return categories.filter((category) => category.homepage);
      })
    );
  }

  private cacheCategories(categories: Array<Category>) {
    this.cachedCategories.next(categories);
    this.flattenedCategories.next(this.getCategoryTree(categories));
  }

  private getCategoryTree(categories: Array<Category>) {
    let tree: Array<Category> = [];
    categories.forEach((category) => {
      tree.push({ ...category, children: null });
      tree.push(...this.getCategoryTree(category.children));
    });
    return tree;
  }

  private mapCategoriesToDomainModel(): OperatorFunction<any, Array<Category>> {
    return map((companiesResponse) => companiesResponse.map((entry) => new Category(entry)));
  }
}
