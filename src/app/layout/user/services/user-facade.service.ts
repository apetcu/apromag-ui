import { Injectable } from '@angular/core';
import { UserApiService } from './user-api.service';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';
import { PaginationInfo } from '../../../shared/models/pagination-info.model';

@Injectable({ providedIn: 'root' })
export class UserFacadeService {
  constructor(private userApi: UserApiService) {}

  updateAccountSettings(accountInfo: User): Observable<any> {
    return this.userApi.updateAccountSettings(accountInfo);
  }

  getAccountDetails() {
    return this.userApi.getAccountDetails();
  }

  getOrders(paginationInfo: PaginationInfo) {
    return this.userApi.getOrders(paginationInfo);
  }
}
