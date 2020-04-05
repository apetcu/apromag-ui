import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { AuthenticationApiService } from './authentication-api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {
  constructor(private authService: AuthService, private authenticationApiService: AuthenticationApiService) {}

  logIn(username: string, password: string) {
    return this.authenticationApiService.logIn(username, password).subscribe(
      (data) => {
        console.log(data);
      },
      () => {
        console.error('ERROR');
      }
    );
  }

  loginWithFb() {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  isFbLoggedIn() {
    return this.authService.authState;
  }

  logOutFb() {
    this.authService.signOut();
  }

  logOut() {}
}
