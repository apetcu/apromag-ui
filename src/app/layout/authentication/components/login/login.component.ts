import { Component, OnInit } from '@angular/core';
import { LoginForm } from './login-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../user/services/user.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: LoginForm = new LoginForm();

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  logIn(): void {
    if (this.loginForm.valid) {
      this.authenticationFacadeService.logIn(this.loginForm.get('email').value, this.loginForm.get('password').value).subscribe(
        () => {
          this.router.navigate(['/home']);
        },
        () => {
          this.alertService.showError('Autentificarea a esuat');
        }
      );
    }
  }

  logInWithFb(): void {
    window.location.href = '/api/social/redirect';
  }
}
