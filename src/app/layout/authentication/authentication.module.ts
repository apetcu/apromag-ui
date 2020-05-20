import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationGuard } from './guards/authentication-guard';
import { InfoBoxModule } from '../../shared/components/info-box/info-box.module';
import { CheckboxModule } from 'primeng/checkbox';
import { PasswordResetComponent } from './containers/password-reset/password-reset.component';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthenticationComponent, PasswordResetComponent],
  providers: [AuthenticationGuard],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, AuthenticationRoutingModule, InfoBoxModule, CheckboxModule]
})
export class AuthenticationModule {}
