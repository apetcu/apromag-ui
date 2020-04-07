import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './containers/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthenticationGuard } from './guards/authentication-guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule {}
