import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { Vendor } from '../models/vendor';
import { Product } from '../../product/models/product';

@Injectable({
  providedIn: 'root'
})
export class VendorsApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<PaginatedResponse<Vendor>> {
    return this.api.get('vendors');
  }

  getById(id: number): Observable<any> {
    return this.api.get(`vendors/${id}`);
  }

  getProducts(id: number, query: object): Observable<PaginatedResponse<Product>> {
    return this.api.get(`vendors/${id}/products`, query);
  }
}
