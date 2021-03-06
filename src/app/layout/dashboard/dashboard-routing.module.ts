import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardProductsComponent } from './containers/dashboard-products/dashboard-products.component';
import { DashboardShippingComponent } from './containers/dashboard-shipping/dashboard-shipping.component';
import { DashboardPaymentComponent } from './containers/dashboard-payment/dashboard-payment.component';
import { DashboardOrdersComponent } from './containers/dashboard-orders/dashboard-orders.component';
import { DashboardOrderComponent } from './containers/dashboard-order/dashboard-order.component';
import { DashboardVendorComponent } from './containers/dashboard-vendor/dashboard-vendor.component';

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
          title: 'Panou'
        }
      },
      {
        path: 'orders',
        component: DashboardOrdersComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Comenzi'
        }
      },
      {
        path: 'orders/:orderId',
        component: DashboardOrderComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Vizualizare comanda'
        }
      },
      {
        path: 'products',
        component: DashboardProductsComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Produse'
        }
      },
      {
        path: 'shipping',
        component: DashboardShippingComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Livrare'
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
      {
        path: 'vendor',
        component: DashboardVendorComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Producator'
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
