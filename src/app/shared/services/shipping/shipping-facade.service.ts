import { Injectable } from '@angular/core';
import { Observable, of, OperatorFunction } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { ShippingLocation } from '../../models/location';
import { ShippingApiService } from './shipping-api.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingFacadeService {
  private cachedShippingLocations: Array<ShippingLocation>;

  constructor(private shippingApiService: ShippingApiService) {}

  getShippingLocations(query: string): Observable<Array<ShippingLocation>> {
    if (this.cachedShippingLocations) {
      return of(this.cachedShippingLocations).pipe(this.filterLocations(query));
    }
    return this.shippingApiService.getLocations().pipe(
      map((shippingLocations) => shippingLocations.map((shippingLocation) => new ShippingLocation(shippingLocation))),
      map((entries) => {
        this.cachedShippingLocations = entries;
        return entries;
      }),
      this.filterLocations(query)
    );
  }

  private filterLocations(query: string): OperatorFunction<Array<ShippingLocation>, Array<ShippingLocation>> {
    return map((locations) =>
      locations.filter((entry) => {
        return entry.name.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      })
    );
  }
}
