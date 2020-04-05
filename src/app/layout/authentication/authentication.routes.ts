import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { Route } from '@angular/router';

export const authenticationRoutes: Route = {
  path: 'auth',
  component: AuthenticationComponent,
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
