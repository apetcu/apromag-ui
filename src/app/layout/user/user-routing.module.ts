import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './containers/user/user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGuard } from './guards/user-guard';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    pathMatch: 'prefix',
    canActivate: [UserGuard],
    children: [
      {
        path: 'details',
        component: UserDetailsComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Detalii cont'
        }
      },
      {
        path: 'settings',
        component: UserSettingsComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Modifica detalii'
        }
      },
      {
        path: 'orders',
        component: UserOrdersComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Lista comnezi'
        }
      },
      { path: '', redirectTo: '/user/details', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
