import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UserDetailsComponent } from '../user/components/user-details/user-details.component';
import { UserSettingsComponent } from '../user/components/user-settings/user-settings.component';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardProductsComponent } from './containers/dashboard-products/dashboard-products.component';
import { DashboardShippingComponent } from './containers/dashboard-shipping/dashboard-shipping.component';
import { DashboardPaymentComponent } from './containers/dashboard-payment/dashboard-payment.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'prefix',
    canActivate: [DashboardGuard],
    children: [
      {
        path: 'overview',
        component: DashboardOverviewComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Comenzi'
        }
      },
      {
        path: 'orders',
        component: UserDetailsComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Detalii cont'
        }
      },
      {
        path: 'products',
        component: DashboardProductsComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Produsele mele'
        }
      },
      {
        path: 'shipping',
        component: DashboardShippingComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Metode de livrare'
        }
      },
      {
        path: 'payment',
        component: DashboardPaymentComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Metode de plata'
        }
      },
      { path: '', redirectTo: '/dashboard/overview', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
