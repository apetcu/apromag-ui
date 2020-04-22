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

  constructor(private categoriesApiService: CategoriesApiService, private productsFacadeService: ProductsFacadeService) {}

  getCategoryById(id: number): Observable<Category> {
    if (this.cachedCategories) {
      return of(this.cachedCategories.find((entry) => entry.id === id));
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
      map((entries) => {
        this.cachedCategories = entries;
        return entries;
      })
    );
  }

  private mapCategoriesToDomainModel(): OperatorFunction<any, Array<Category>> {
    return map((companiesResponse) => companiesResponse.map((entry) => new Category(entry)));
  }
}
