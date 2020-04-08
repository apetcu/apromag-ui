import { Product } from '../../product/models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';
import { DashboardApiService } from './dashboard-api.service';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { Order } from '../../../shared/models/order.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardFacadeService {
  constructor(private dashboardApiService: DashboardApiService) {}

  getOrders(paginationInfo: PaginationInfo): Observable<PaginatedResponse<Order>> {
    return this.dashboardApiService.getOrders(paginationInfo).pipe(this.mapCompaniesToDomainModel());
  }

  getProducts(paginationInfo: PaginationInfo): Observable<PaginatedResponse<Product>> {
    return this.dashboardApiService.getProducts(paginationInfo).pipe(this.mapProductsToDomainModel());
  }

  private mapCompaniesToDomainModel(): OperatorFunction<PaginatedResponse<Order>, PaginatedResponse<Order>> {
    return map((vendorsResponse) => {
      vendorsResponse.content = vendorsResponse.content.map((entry) => new Order(entry));
      return vendorsResponse;
    });
  }

  private mapProductsToDomainModel(): OperatorFunction<PaginatedResponse<Product>, PaginatedResponse<Product>> {
    return map((productResponse) => {
      productResponse.content = productResponse.content.map((entry) => new Product(entry));
      return productResponse;
    });
  }
}
