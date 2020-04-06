import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Route } from '@angular/router';
import { CanActivateAuthentication } from './guards/authentication-guard';

export const authenticationRoutes: Route = {
  path: 'auth',
  component: AuthenticationComponent,
  canActivate: [CanActivateAuthentication],
  children: [
    {
      path: 'login',
      component: LoginComponent,
      data: {
        title: 'Autentificare'
      }
    },
    {
      path: 'register',
      component: RegisterComponent,
      data: {
        title: 'Inregistrare'
      }
    },
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' }
  ]
};
