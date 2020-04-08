import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { UserService } from '../../user/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardApiService {
  domainUrl: string = '';
  constructor(private api: ApiService) {}

  getOrders(query: object): Observable<any> {
    return this.api.get(`${this.domainUrl}orders`, query);
  }

  register(): Observable<any> {
    return this.api.post(`${this.domainUrl}/register`, {});
  }
}
