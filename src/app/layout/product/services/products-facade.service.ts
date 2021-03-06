import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsApiService } from './products-api.service';
import { Product } from '../models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { VendorProductsGroup } from '../../categories/models/category-products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsFacadeService {
  constructor(private productsApiService: ProductsApiService) {}

  getProducts(): Observable<Array<Product>> {
    return this.productsApiService.getAll().pipe(this.mapCompaniesToDomainModel());
  }

  getProductsByQuery(query: string): Observable<PaginatedResponse<Product>> {
    return this.productsApiService.getAllByQuery(query).pipe(this.mapProductsToDomainModel());
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
      productsResponse.data = productsResponse.data.map((entry) => new Product(entry));
      return productsResponse;
    });
  }
  // Used by other facades as well
  public mapGroupProductsByVendor(): OperatorFunction<PaginatedResponse<Product>, Array<VendorProductsGroup>> {
    return map((productsResponse) => {
      let groups = {};
      productsResponse.data.forEach((product) => {
        if (groups[product.vendorId]) {
          groups[product.vendorId].products.push(product);
        } else {
          groups[product.vendorId] = {
            vendor: product.vendor,
            products: [product]
          };
        }
      });
      return Object.values(groups);
    });
  }
}
