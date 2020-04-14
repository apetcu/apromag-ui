import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { OrderApiService } from './order-api.service';
import { Order } from '../../models/order.model';
import { PaginationInfo } from '../../models/pagination-info.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderFacadeService {
  constructor(private orderApiService: OrderApiService) {}

  getOrders(query: PaginationInfo): Observable<Array<Order>> {
    return this.orderApiService.getAll(query).pipe(this.mapOrdersToDomainModel());
  }

  getOrder(id: number): Observable<Order> {
    return this.orderApiService.getById(id).pipe(map((order) => new Order(order)));
  }

  private mapOrdersToDomainModel(): OperatorFunction<any, Array<Order>> {
    return map((orders) => orders.map((order) => new Order(order)));
  }
}
