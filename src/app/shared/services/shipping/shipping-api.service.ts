import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingApiService {
  constructor(private api: ApiService) {}

  getLocations(): Observable<any> {
    return of(mockShippingLocations);
    // return this.api.get('shipping');
  }
}

let mockShippingLocations = [
  {
    id: 1,
    name: 'Bucuresti, Sector 1',
    lat: 123,
    lon: 221
  },
  {
    id: 1,
    name: 'Bucuresti, Sector 2',
    lat: 123,
    lon: 221
  },
  {
    id: 1,
    name: 'Bucuresti, Sector 3',
    lat: 123,
    lon: 221
  },
  {
    id: 1,
    name: 'Bucuresti, Sector 4',
    lat: 123,
    lon: 221
  },
  {
    id: 1,
    name: 'Bucuresti, Sector 5',
    lat: 123,
    lon: 221
  },
  {
    id: 1,
    name: 'Bucuresti, Sector 6',
    lat: 123,
    lon: 221
  }
];
