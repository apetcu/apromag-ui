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

  getCustomerOrderById(id: number): Observable<any> {
    return this.api.get(`account/orders/${id}`);
  }

  setStatus(id: number, statusForm: any): Observable<any> {
    return this.api.post(`${this.domainUrl}/${id}/status`, statusForm);
  }

  getStatuses() {
    return of([
      { label: 'SUBMITTED', value: 'SUBMITTED' },
      { label: 'IN_PROGRESS', value: 'IN_PROGRESS' },
      { label: 'SHIPPED', value: 'SHIPPED' },
      { label: 'COMPLETED', value: 'COMPLETED' },
      { label: 'CANCELED', value: 'CANCELED' }
    ]);
  }
}
