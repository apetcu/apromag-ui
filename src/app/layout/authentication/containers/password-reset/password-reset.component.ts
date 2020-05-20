import { Component, OnInit } from '@angular/core';
import { PasswordResetForm } from './password-reset-form';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm: PasswordResetForm = new PasswordResetForm();

  constructor(private authenticationFacadeService: AuthenticationFacadeService, private alertService: AlertService) {}

  ngOnInit(): void {}

  resetPassword(): void {
    this.authenticationFacadeService.passwordReset(this.passwordResetForm.value).subscribe((data) => {
      this.alertService.show({
        title: 'Succes',
        text: 'Daca adresa de e-mail exista in baza de date, vei primi instructiuni cu privire la resetarea parolei',
        icon: 'success'
      });
    });
  }
}
