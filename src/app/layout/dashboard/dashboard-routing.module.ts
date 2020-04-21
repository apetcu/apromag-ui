import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { UserDetailsComponent } from '../user/components/user-details/user-details.component';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardProductsComponent } from './containers/dashboard-products/dashboard-products.component';
import { DashboardShippingComponent } from './containers/dashboard-shipping/dashboard-shipping.component';
import { DashboardPaymentComponent } from './containers/dashboard-payment/dashboard-payment.component';
import { OrderListComponent } from '../../shared/components/order-list/order-list.component';
import { DashboardOrdersComponent } from './containers/dashboard-orders/dashboard-orders.component';
import { DashboardOrderComponent } from './containers/dashboard-order/dashboard-order.component';

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
        component: DashboardOrdersComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Comenzile mele'
        }
      },
      {
        path: 'orders/:orderId',
        component: DashboardOrderComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Comenzile mele'
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
