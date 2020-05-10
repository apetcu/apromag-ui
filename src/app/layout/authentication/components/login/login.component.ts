import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();
  loggedIn: boolean;

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['token']) {
        this.userService.initialize(params['token']).then(() => {
          this.router.navigate(['/home']);
        });
      }
    });
  }

  ngOnInit(): void {
    // this.authenticationFacadeService.isFbLoggedIn().subscribe((user) => {
    //   this.user = user;
    //   this.loggedIn = user != null;
    //   console.log(this.user);
    // });
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
    window.location.href = '/api/social/redirect';
  }
}
