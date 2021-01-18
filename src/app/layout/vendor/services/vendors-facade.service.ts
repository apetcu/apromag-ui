import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { VendorsApiService } from './vendors-api.service';
import { Vendor } from '../models/vendor';
import { Product } from '../../product/models/product';
import { PaginatedResponse } from '../../../shared/models/paginated-response';
import { ProductsFacadeService } from '../../product/services/products-facade.service';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';
import { ShippingService } from '../../../shared/services/shipping/shipping.service';

@Injectable({
  providedIn: 'root'
})
export class VendorsFacadeService {
  constructor(
    private vendorsApiService: VendorsApiService,
    private productsFacadeService: ProductsFacadeService,
    private shippingService: ShippingService
  ) {}

  getVendors(): Observable<PaginatedResponse<Vendor>> {
    const query = new PaginationInfo(1, 100);
    return this.shippingService.onShippingLocationChange().pipe(
      mergeMap((shippingLocation) => {
        return this.vendorsApiService.getAll({ ...query, locationId: shippingLocation.id });
      }),
      this.mapVendorstoDomainModel()
    );
  }

  getVendorById(id: number): Observable<Vendor> {
    return this.vendorsApiService.getById(id).pipe(map((response) => new Vendor(response)));
  }

  getPopular(): Observable<PaginatedResponse<Vendor>> {
    return this.vendorsApiService.getPopular().pipe(this.mapVendorstoDomainModel());
  }

  getLatest(): Observable<PaginatedResponse<Vendor>> {
    return this.vendorsApiService.getLatest().pipe(this.mapVendorstoDomainModel());
  }

  getVendorProducts(id: number): Observable<PaginatedResponse<Product>> {
    return this.vendorsApiService.getProducts(id, new PaginationInfo(1, 1000)).pipe(this.productsFacadeService.mapProductsToDomainModel());
  }

  private mapVendorstoDomainModel(): OperatorFunction<PaginatedResponse<Vendor>, PaginatedResponse<Vendor>> {
    return map((vendorsResponse) => {
      vendorsResponse.data = vendorsResponse.data.map((entry) => new Vendor(entry));
      return vendorsResponse;
    });
  }
}
