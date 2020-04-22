import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { CategoriesApiService } from './categories-api.service';
import { Category } from '../models/category.model';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { Product } from '../../product/models/product';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';
import { ProductsFacadeService } from '../../product/services/products-facade.service';

@Injectable({
  providedIn: 'root'
})
export class CategoriesFacadeService {
  private cachedCategories: Array<Category>;
  private flattenedCategories: Array<Category>;

  constructor(private categoriesApiService: CategoriesApiService, private productsFacadeService: ProductsFacadeService) {}

  getCategoryById(id: number): Observable<Category> {
    if (this.cachedCategories) {
      return of(this.flattenedCategories.find((category) => category.id === id));
    }
    return this.categoriesApiService.getById(id).pipe(map((category) => new Category(category)));
  }

  getCategoryProducts(id: number): Observable<PaginatedResponse<Product>> {
    return this.categoriesApiService.getProducts(id, new PaginationInfo()).pipe(this.productsFacadeService.mapProductsToDomainModel());
  }

  getCategories(): Observable<Array<Category>> {
    if (this.cachedCategories) {
      return of(this.cachedCategories);
    }
    return this.categoriesApiService.getAll().pipe(
      this.mapCategoriesToDomainModel(),
      map((categories) => {
        this.cacheCategories(categories);
        return categories;
      })
    );
  }

  private cacheCategories(categories: Array<Category>) {
    this.cachedCategories = categories;
    this.flattenedCategories = this.getCategoryTree(categories);
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
