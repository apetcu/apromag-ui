import { Component, OnInit } from '@angular/core';
import { PasswordResetForm } from '../password-reset/password-reset-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { PasswordResetTokenForm } from './password-reset-token-form';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-password-reset-token',
  templateUrl: './password-reset-token.component.html',
  styleUrls: ['./password-reset-token.component.scss']
})
export class PasswordResetTokenComponent implements OnInit {
  passwordResetForm: PasswordResetTokenForm = new PasswordResetTokenForm();
  uuid: string = '';

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
    private alertService: AlertService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.uuid = params.token;
    });
  }

  resetPassword(): void {
    this.authenticationFacadeService.passwordResetWithToken(this.passwordResetForm.value, this.uuid).subscribe(
      (data) => {
        this.alertService.show({
          title: 'Succes',
          text: 'Parola a fost resetata cu succes. Puteti utiliza noua parola pentru a va autentifica',
          icon: 'success'
        });
        this.router.navigate(['auth', 'login']);
      },
      () => {
        this.alertService.show({
          title: 'Eroare',
          text: 'Token invalid sau expirat',
          icon: 'error'
        });
      }
    );
  }
}
