import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ShippingLocation } from '../../models/location';
import { ShippingApiService } from './shipping-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingFacadeService {
  private cachedShippingLocations: Array<ShippingLocation>;

  constructor(private shippingApiService: ShippingApiService) {}

  getShippingLocations(): Observable<Array<ShippingLocation>> {
    if (this.cachedShippingLocations) {
      return of(this.cachedShippingLocations);
    }
    return this.shippingApiService.getLocations().pipe(
      map((shippingLocations) => shippingLocations.map((shippingLocation) => new ShippingLocation(shippingLocation))),
      map((entries) => {
        this.cachedShippingLocations = entries;
        return entries;
      })
    );
  }
}
