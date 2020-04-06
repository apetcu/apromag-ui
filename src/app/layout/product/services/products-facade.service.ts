import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsApiService } from './products-api.service';
import { Product } from '../models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {
  constructor(private productsApiService: ProductsApiService) {}

  getProducts(): Observable<Array<Product>> {
    return this.productsApiService.getAll().pipe(this.mapCompaniesToDomainModel());
  }

  getProductById(id: number): Observable<Product> {
    return this.productsApiService.getById(id).pipe(map((response) => new Product(response)));
  }

  private mapCompaniesToDomainModel(): OperatorFunction<any, Array<Product>> {
    return map((productsResponse) => productsResponse.map((entry) => new Product(entry)));
  }

  // Used by other facades as well
  public mapProductsToDomainModel(): OperatorFunction<PaginatedResponse<Product>, PaginatedResponse<Product>> {
    return map((productsResponse) => {
      productsResponse.content = productsResponse.content.map((entry) => new Product(entry));
      return productsResponse;
    });
  }
}
