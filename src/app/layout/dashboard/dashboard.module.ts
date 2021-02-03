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
import { ProfileCompletionWizardModule } from '../../shared/components/profile-completion-wizard/profile-completion-wizard.module';
import { DefaultImageModule } from '../../shared/directives/default-image/default-image.module';
import { LoadingModule } from '../../shared/components/loading/loading.module';
import { MultiSelectModule } from 'primeng/multiselect';
import { FilterModule } from '../../shared/pipes/filter/filter.module';
import { ChartModule } from 'primeng/chart';
import { WidgetModule } from '../../shared/components/widget/widget.module';
import { OrderStatusHistoryModule } from '../../shared/components/order-status-history/order-status-history.module';

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
    OrderSummaryModule,
    ProfileCompletionWizardModule,
    DefaultImageModule,
    LoadingModule,
    MultiSelectModule,
    FilterModule,
    ChartModule,
    WidgetModule,
    OrderStatusHistoryModule
  ]
})
export class DashboardModule {}
