import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../../../shared/services/api/api.service';
import { UserRegistration } from '../components/register/models/user-registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationApiService {
  domainUrl: string = 'auth';
  constructor(private api: ApiService) {}

  logIn(email: string, password: string): Observable<any> {
    return this.api.post(`${this.domainUrl}/login`, { email, password });
  }

  register(userRegistration: UserRegistration): Observable<any> {
    return this.api.post(`${this.domainUrl}/register`, userRegistration);
  }

  passwordReset(resetForm: any): Observable<any> {
    return this.api.post(`${this.domainUrl}/password-reset`, resetForm);
  }

  loginWithFb(): Observable<any> {
    return this.api.get(`social/redirect`);
  }
}
