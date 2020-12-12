import { Injectable } from '@angular/core';
import { AuthenticationApiService } from './authentication-api.service';
import { map } from 'rxjs/operators';
import { User } from 'src/app/layout/user/models/user.model';
import { UserService } from '../../user/services/user.service';
import { UserRegistration } from '../components/register/models/user-registration.model';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationFacadeService {
  constructor(private authenticationApiService: AuthenticationApiService, private userService: UserService) {}

  logIn(username: string, password: string) {
    return this.authenticationApiService.logIn(username, password).pipe(
      map((userResponse) => {
        this.userService.setUser(new User(userResponse));
      })
    );
  }

  register(registrationInfo: UserRegistration) {
    return this.authenticationApiService.register(new UserRegistration(registrationInfo));
  }

  passwordReset(passwordResetForm) {
    return this.authenticationApiService.passwordReset(passwordResetForm);
  }

  passwordResetWithToken(passwordResetForm, uuid) {
    return this.authenticationApiService.passwordResetWithToken(passwordResetForm, uuid);
  }

  loginWithFb() {
    return this.authenticationApiService.loginWithFb();
  }

  logOut() {}
}
