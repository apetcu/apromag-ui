import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginForm } from './login-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authenticationFacadeService: AuthenticationFacadeService) {}

  ngOnInit(): void {
    this.authenticationFacadeService.isFbLoggedIn().subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
  }

  logIn(): void {
    if (this.loginForm.valid) {
      this.authenticationFacadeService.logIn(this.loginForm.get('email').value, this.loginForm.get('password').value);
    }
  }

  logInWithFb(): void {
    this.authenticationFacadeService.loginWithFb();
  }
}
