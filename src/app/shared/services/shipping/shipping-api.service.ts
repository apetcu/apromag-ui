import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class ShippingApiService {
  constructor(private api: ApiService) {}

  getLocations(): Observable<any> {
    return this.api.get('shipping/locations');
  }

  saveLocations(locations): Observable<any> {
    return this.api.post('shipping/preferences', locations);
  }
}
