import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [RegisterComponent, LoginComponent, AuthenticationComponent],
  imports: [CommonModule, RouterModule]
})
export class AuthenticationModule {}
