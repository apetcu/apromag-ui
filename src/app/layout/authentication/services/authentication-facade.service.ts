import { Injectable } from '@angular/core';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { AuthenticationApiService } from './authentication-api.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/layout/user/models/user.model';
import { UserService } from '../../user/services/user.service';
import { UserRegistration } from '../components/register/models/user-registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {
  constructor(
    private authService: AuthService,
    private authenticationApiService: AuthenticationApiService,
    private userService: UserService
  ) {}

  logIn(username: string, password: string) {
    return this.authenticationApiService.logIn(username, password).pipe(
      map((userResponse) => {
        this.userService.setJwt(userResponse.headers.get('Authorization').replace('Bearer ', ''));
        return new User(userResponse.body);
      }),
      map((user) => {
        this.userService.setUser(user);
        return user;
      })
    );
  }

  register(registrationInfo: UserRegistration) {
    return this.authenticationApiService.register(new UserRegistration(registrationInfo));
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
