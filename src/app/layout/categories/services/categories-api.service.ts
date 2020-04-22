import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {
  private domainUrl = 'categories';
  constructor(private api: ApiService) {}

  getAll(): Observable<any> {
    return this.api.get(this.domainUrl);
  }

  getById(id: number): Observable<any> {
    return this.api.get(`${this.domainUrl}/${id}`);
  }

  getProducts(id: number, paginationInfo: PaginationInfo): Observable<any> {
    return this.api.get(`${this.domainUrl}/${id}/products`, paginationInfo);
  }
}
