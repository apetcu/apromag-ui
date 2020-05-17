import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserSettingsForm } from './user-settings-form';
import { UserFacadeService } from '../../services/user-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UserChangeEmailForm } from './user-change-email-form';
import { UserChangePasswordForm } from './user-change-password-form';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userSettingsForm: UserSettingsForm;
  userChangeEmailForm: UserChangeEmailForm = new UserChangeEmailForm();
  userChangePasswordForm: UserChangePasswordForm = new UserChangePasswordForm();

  constructor(private userService: UserService, private userFacade: UserFacadeService, private alertService: AlertService) {}

  ngOnInit(): void {
    this.initializeUserForm();
  }

  onSubmit(): void {
    this.userFacade.updateAccountSettings(this.userSettingsForm.value).subscribe((accountInfo: User) => {
      this.userService.setUser(new User(accountInfo));
      this.initializeUserForm();
      this.alertService.showSuccess('Datele contului au fost actualizate');
    });
  }

  changePassword(): void {
    this.userFacade.changePassword(this.userChangePasswordForm.value).subscribe(() => {
      this.alertService.showSuccess('Parola a fost modificata');
    });
  }

  changeEmail(): void {
    this.userFacade.changeEmail(this.userChangeEmailForm.value).subscribe(
      (accountInfo) => {
        this.alertService.showSuccess('E-mail-ul a fost modificat');
        this.userService.setUser(new User(accountInfo));
      },
      () => {
        this.alertService.showError('Acest e-mail este folosit de catre alt utilizator');
      }
    );
  }

  initializeUserForm(): void {
    this.userSettingsForm = new UserSettingsForm(this.userService.getUser());
  }
}
