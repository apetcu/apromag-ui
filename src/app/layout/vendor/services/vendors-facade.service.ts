import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorsApiService } from './vendors-api.service';
import { Vendor } from '../models/vendor';
import { Product } from '../../product/models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { ProductsFacadeService } from '../../product/services/products-facade.service';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';

@Injectable({
  providedIn: 'root'
})
export class VendorsFacadeService {
  constructor(private vendorsApiService: VendorsApiService, private productsFacadeService: ProductsFacadeService) {}

  getVendors(): Observable<PaginatedResponse<Vendor>> {
    return this.vendorsApiService.getAll().pipe(this.mapCompaniesToDomainModel());
  }

  getVendorById(id: number): Observable<Vendor> {
    return this.vendorsApiService.getById(id).pipe(map((response) => new Vendor(response)));
  }

  getVendorProducts(id: number): Observable<PaginatedResponse<Product>> {
    return this.vendorsApiService.getProducts(id, new PaginationInfo()).pipe(this.productsFacadeService.mapProductsToDomainModel());
  }

  private mapCompaniesToDomainModel(): OperatorFunction<PaginatedResponse<Vendor>, PaginatedResponse<Vendor>> {
    return map((vendorsResponse) => {
      vendorsResponse.content = vendorsResponse.content.map((entry) => new Vendor(entry));
      return vendorsResponse;
    });
  }
}
