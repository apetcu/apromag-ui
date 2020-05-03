import { Product } from '../../product/models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';
import { DashboardApiService } from './dashboard-api.service';
import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { Order } from '../../../shared/models/order.model';
import { map } from 'rxjs/operators';
import { ModifyProductModel } from '../components/dashboard-modify-product/modify-product-form';

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

  deleteProduct(id: number): Observable<any> {
    return this.dashboardApiService.deleteProduct(id);
  }

  addOrModifyProduct(productFormBody: ModifyProductModel, id: number = null): Observable<PaginatedResponse<Product>> {
    const productFormData = this.buildProductFormData(productFormBody);
    // @ts-ignore
    productFormData.append('stock', productFormBody.stock ? 1 : 0);
    return id ? this.dashboardApiService.editProduct(productFormData, id) : this.dashboardApiService.addProduct(productFormData);
  }

  private buildProductFormData(modifyProductBody: ModifyProductModel) {
    const excludedKeys = ['images', 'altUnit'];
    const formData = new FormData();
    if (modifyProductBody.images) {
      modifyProductBody.images.forEach((file) => {
        formData.append('images', file, file.name);
      });
    }
    Object.keys(modifyProductBody).forEach((key) => {
      if (!excludedKeys.includes(key)) {
        if (key === 'unit' && !modifyProductBody[key]) {
          formData.append('unit', modifyProductBody['altUnit']);
        } else if (key === 'stock') {
          formData.append('stock', (modifyProductBody['stock'] ? 1 : 0).toString());
        } else {
          formData.append(key, modifyProductBody[key]);
        }
      }
    });
    return formData;
  }

  private mapCompaniesToDomainModel(): OperatorFunction<PaginatedResponse<Order>, PaginatedResponse<Order>> {
    return map((vendorsResponse) => {
      vendorsResponse.data = vendorsResponse.data.map((entry) => new Order(entry));
      return vendorsResponse;
    });
  }

  private mapProductsToDomainModel(): OperatorFunction<PaginatedResponse<Product>, PaginatedResponse<Product>> {
    return map((productResponse) => {
      productResponse.data = productResponse.data.map((entry) => new Product(entry));
      return productResponse;
    });
  }
}
