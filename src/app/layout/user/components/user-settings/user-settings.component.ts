import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { UserSettingsForm } from './user-settings-form';
import { UserFacadeService } from '../../services/user-facade.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss']
})
export class UserSettingsComponent implements OnInit {
  userSettingsForm: UserSettingsForm;

  constructor(private userService: UserService, private userFacade: UserFacadeService) { }

  ngOnInit(): void {
    this.initializeUserForm();
  }

  onSubmit(): void {
    this.userFacade.updateAccountSettings(this.userSettingsForm.value).subscribe((accountInfo: User) => {
      this.userService.setUser(accountInfo);
      this.initializeUserForm();
    });
  }

  initializeUserForm(): void {
    this.userSettingsForm = new UserSettingsForm(this.userService.getUser());
  }

}
