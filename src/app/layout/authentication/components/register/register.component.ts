import { Component, OnInit } from '@angular/core';
import { RegisterForm } from './register-form';
import { UserRoles } from '../../../user/models/user-roles';
import { AuthenticationFacadeService } from '../../services/authentication-facade.service';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  errorMessage: string = null;
  registerForm: RegisterForm = new RegisterForm();
  currentRegistrationType: UserRoles = UserRoles.CUSTOMER;

  constructor(
    private authenticationFacadeService: AuthenticationFacadeService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params.businessName) {
        this.registerForm.patchValue(params);
        this.currentRegistrationType = UserRoles.VENDOR;
      }
    });
  }

  register() {
    if (this.registerForm.valid) {
      this.authenticationFacadeService.register(this.registerForm.value).subscribe(
        (data) => {
          this.alertService.show({
            title: 'Felicitari',
            text: 'Contul tau a fost creat cu succes. Te rugam sa-ti verifici casuta de mail pentru activarea contului',
            icon: 'success'
          });
          this.router.navigate(['/home']);
        },
        (response) => {
          if (response.error && response.error.errors) {
            const errorType = response.error.errors;
            if (errorType.email) {
              this.setError('Exista deja un cont creat cu acest e-mail');
            }
          } else {
            this.setError('A aparut o eroare la crearea contului');
          }
        }
      );
    } else {
      this.setError('Unul sau mai multe campuri obligatorii nu sunt completate');
    }
  }

  setError(message: string) {
    this.errorMessage = message;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  switchRegisterType(type: string) {
    this.currentRegistrationType = type as UserRoles;
    this.registerForm.controls['role'].setValue(type);
  }

  logInWithFb(): void {
    window.location.href = '/api/social/redirect';
  }
}
