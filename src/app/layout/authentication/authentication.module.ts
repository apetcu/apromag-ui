import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationGuard } from './guards/authentication-guard';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthenticationComponent],
  providers: [AuthenticationGuard],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, AuthenticationRoutingModule]
})
export class AuthenticationModule {}
