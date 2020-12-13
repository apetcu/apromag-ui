import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../product/models/product';
import { ProductsFacadeService } from '../../product/services/products-facade.service';
import { PaginatedResponse } from '../../../shared/models/paginated-response';

@Injectable({
  providedIn: 'root'
})
export class SearchFacadeService {
  constructor(private productsFacadeService: ProductsFacadeService) {}

  getProductsByQuery(query: string): Observable<PaginatedResponse<Product>> {
    return this.productsFacadeService.getProductsByQuery(query);
  }
}
