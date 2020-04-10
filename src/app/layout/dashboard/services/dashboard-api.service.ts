import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  domainUrl: string = '';
  constructor(private api: ApiService) {}

  getOrders(query: object): Observable<any> {
    return this.api.get(`${this.domainUrl}orders`, query);
  }

  getProducts(query: object): Observable<any> {
    return this.api.get(`${this.domainUrl}products`, query);
  }

  addProduct(product): Observable<any> {
    return this.api.post(`${this.domainUrl}products`, product);
  }

  editProduct(product, id: number): Observable<any> {
    return this.api.put(`${this.domainUrl}products/${id}`, product);
  }

  register(): Observable<any> {
    return this.api.post(`${this.domainUrl}/register`, {});
  }
}
