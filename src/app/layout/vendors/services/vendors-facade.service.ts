import { Injectable } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { VendorsApiService } from './vendors-api.service';
import { Vendor } from '../models/vendor';
import { Product } from '../../product/models/product';

@Injectable({
  providedIn: 'root'
})
export class VendorsFacadeService {
  constructor(private vendorsApiService: VendorsApiService) {}

  getVendors(): Observable<Array<Vendor>> {
    return this.vendorsApiService.getAll().pipe(this.mapCompaniesToDomainModel());
  }

  getVendorById(id: number): Observable<Vendor> {
    return this.vendorsApiService.getById(id).pipe(map((response) => new Vendor(response)));
  }

  getVendorProducts(id: number): Observable<Array<Product>> {
    return this.vendorsApiService.getProducts(id).pipe(map((response) => response.content.map((product) => new Product(product))));
  }

  private mapCompaniesToDomainModel(): OperatorFunction<any, Array<Vendor>> {
    return map((vendorsResponse) => vendorsResponse.map((entry) => new Vendor(entry)));
  }
}
