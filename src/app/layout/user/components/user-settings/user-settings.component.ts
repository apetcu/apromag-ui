import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserSettingsForm } from './user-settings-form';
import { UserFacadeService } from '../../services/user-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UserChangeEmailForm } from './user-change-email-form';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userSettingsForm: UserSettingsForm;
  userChangeEmailForm: UserChangeEmailForm = new UserChangeEmailForm();

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

  initializeUserForm(): void {
    this.userSettingsForm = new UserSettingsForm(this.userService.getUser());
  }
}
