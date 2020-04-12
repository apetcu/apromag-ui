import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class CartApiService {
  constructor(private api: ApiService) {}

  submitOrder(orderDetails: any): Observable<any> {
    return this.api.post('orders', orderDetails);
  }
}
