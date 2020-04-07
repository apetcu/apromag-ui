import { Component, OnInit } from '@angular/core';
import { RegisterForm } from './register-form';
import { UserRoles } from '../../../user/models/user-roles';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: RegisterForm = new RegisterForm();
  currentRegistrationType: UserRoles = UserRoles.CUSTOMER;

  constructor(private authenticationFacadeService: AuthenticationFacadeService) {}

  ngOnInit(): void {}

  register() {
    this.authenticationFacadeService.register(this.registerForm.value).subscribe((data) => {
      console.log(data);
    });
    console.log(this.registerForm.value);
  }

  switchRegisterType(type: string) {
    this.currentRegistrationType = type as UserRoles;
    this.registerForm.controls['role'].setValue(type);
  }
}
