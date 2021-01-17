import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication-guard';
import { PasswordResetComponent } from './containers/password-reset/password-reset.component';
import { PasswordResetTokenComponent } from './containers/password-reset-token/password-reset-token.component';
import { CreateComponent } from './containers/create/create.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    canActivate: [AuthenticationGuard],
    pathMatch: 'prefix',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Autentificare'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Inregistrare'
        }
      },
      {
        path: 'register/client',
        component: RegisterComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Inregistrare client'
        }
      },
      {
        path: 'register/vendor',
        component: RegisterComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Inregistrare producator'
        }
      },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
    ]
  },
  {
    path: 'create',
    component: CreateComponent,
    pathMatch: 'prefix',
    data: {
      title: 'Inregistrare'
    }
  },
  {
    path: 'password-reset',
    component: PasswordResetComponent,
    pathMatch: 'prefix',
    data: {
      title: 'Resetare parola'
    }
  },
  {
    path: 'password-reset/:token',
    component: PasswordResetTokenComponent,
    pathMatch: 'prefix',
    data: {
      title: 'Resetare parola'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
