import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api.service';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  private basePath = 'account';
  constructor(private api: ApiService) {}

  updateAccountSettings(accountInfo: User): Observable<any> {
    return this.api.put(`${this.basePath}`, accountInfo);
  }

  getAccountDetails(): Observable<any> {
    return this.api.get(`${this.basePath}`);
  }

  getOrders(paginationInfo: PaginationInfo): Observable<any> {
    return this.api.get(`${this.basePath}/orders`, paginationInfo);
  }

  changePassword(passwordForm): Observable<any> {
    return this.api.post(`${this.basePath}/change-password`, {
      password: passwordForm.password,
      currentPassword: passwordForm.currentPassword
    });
  }

  changeEmail(emailForm): Observable<any> {
    return this.api.post(`${this.basePath}/change-email`, { email: emailForm.email, currentPassword: emailForm.currentPassword });
  }
}
