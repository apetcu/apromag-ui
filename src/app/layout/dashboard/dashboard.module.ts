import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { TableModule } from 'primeng/table';
import { DashboardProductsComponent } from './containers/dashboard-products/dashboard-products.component';
import { DashboardModifyProductComponent } from './components/dashboard-modify-product/dashboard-modify-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FileUploadModule } from '../../shared/components/file-upload/file-upload.module';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InfoBoxModule } from '../../shared/components/info-box/info-box.module';
import { TranslateModule } from '@ngx-translate/core';
import { PaginatorModule } from 'primeng/paginator';
import { DashboardShippingComponent } from './containers/dashboard-shipping/dashboard-shipping.component';
import { DashboardPaymentComponent } from './containers/dashboard-payment/dashboard-payment.component';
import { DialogModule } from 'primeng/dialog';
import { ngfModule } from 'angular-file';
import { DashboardOrdersComponent } from './containers/dashboard-orders/dashboard-orders.component';
import { DashboardOrderComponent } from './containers/dashboard-order/dashboard-order.component';
import { OrderBadgeModule } from '../../shared/components/order-badge/order-badge.module';
import { OrderListModule } from '../../shared/components/order-list/order-list.module';
import { CurrencyModule } from '../../shared/pipes/currency/currency.module';
import { OrderProductListModule } from '../../shared/components/order-product-list/order-product-list.module';
import { OrderSummaryModule } from '../../shared/components/order-summary/order-summary.module';
import { DashboardVendorComponent } from './containers/dashboard-vendor/dashboard-vendor.component';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOverviewComponent,
    DashboardProductsComponent,
    DashboardModifyProductComponent,
    DashboardShippingComponent,
    DashboardPaymentComponent,
    DashboardOrdersComponent,
    DashboardOrderComponent,
    DashboardVendorComponent
  ],
  providers: [DashboardGuard],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    TableModule,
    ReactiveFormsModule,
    FileUploadModule,
    InputSwitchModule,
    InfoBoxModule,
    TranslateModule,
    PaginatorModule,
    DialogModule,
    ngfModule,
    OrderBadgeModule,
    OrderListModule,
    CurrencyModule,
    OrderProductListModule,
    OrderSummaryModule
  ]
})
export class DashboardModule {}
