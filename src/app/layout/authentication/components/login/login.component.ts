import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LoginForm } from './login-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authenticationFacadeService: AuthenticationFacadeService, private router: Router) {}

  ngOnInit(): void {
    this.authenticationFacadeService.isFbLoggedIn().subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
      console.log(this.user);
    });
  }

  logIn(): void {
    if (this.loginForm.valid) {
      this.authenticationFacadeService.logIn(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        () => {}
      );
    }
  }

  logInWithFb(): void {
    this.authenticationFacadeService.loginWithFb();
  }
}
