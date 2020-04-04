import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductsApiService } from './products-api.service';
import { Product } from '../models/product';

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
}
