import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api/api.service';
import { PaginationInfo } from '../../models/pagination-info.model';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService {
  domainUrl: string = 'orders';

  constructor(private api: ApiService) {}

  getAll(query: PaginationInfo): Observable<any> {
    return this.api.get(`${this.domainUrl}`, query);
  }

  getById(id: number): Observable<any> {
    return this.api.get(`${this.domainUrl}/${id}`);
  }
}
