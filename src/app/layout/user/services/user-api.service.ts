import { Injectable } from '@angular/core';
import { ApiService } from '../../../shared/services/api/api.service';
import { User } from '../models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserApiService {
  constructor(private api: ApiService) {}

  updateAccountSettings(accountInfo: User): Observable<any> {
    return of(accountInfo);
  }
}
