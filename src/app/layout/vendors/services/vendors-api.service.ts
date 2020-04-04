import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class VendorsApiService {
  constructor(private api: ApiService) {}

  getAll(): Observable<any> {
    return this.api.get('vendors');
  }

  getById(id: number): Observable<any> {
    return this.api.get(`vendors/${id}`);
  }

  getProducts(id: number): Observable<any> {
    return this.api.get(`vendors/${id}/products?pageNo=1&pageSize=10&sortBy=id`);
  }
}
