import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

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
    return this.api.post(`${this.domainUrl}products/${id}`, product);
  }

  updateProfilePicture(picture): Observable<any> {
    return this.api.post(`${this.domainUrl}account/profilePicture`, picture);
  }

  deleteProduct(id): Observable<any> {
    return this.api.delete(`${this.domainUrl}products/${id}`);
  }

  register(): Observable<any> {
    return this.api.post(`${this.domainUrl}/register`, {});
  }
}
