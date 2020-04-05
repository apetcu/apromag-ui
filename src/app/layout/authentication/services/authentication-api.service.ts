import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {
  domainUrl: string = 'auth';
  constructor(private api: ApiService) {}

  logIn(username: string, password: string): Observable<any> {
    return this.api.post(`${this.domainUrl}/login`, { username, password });
  }

  register(): Observable<any> {
    return this.api.post(`${this.domainUrl}/register`, {});
  }
}
