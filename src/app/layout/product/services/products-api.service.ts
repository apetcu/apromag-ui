import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {
  domainUrl: string = 'products';
  constructor(private api: ApiService) {}

  getAll(): Observable<any> {
    return this.api.get(this.domainUrl);
  }

  getAllByQuery(searchQuery: string): Observable<any> {
    return this.api.get(this.domainUrl, { searchQuery });
  }

  getById(id: number): Observable<any> {
    return this.api.get(`${this.domainUrl}/${id}`);
  }
}
