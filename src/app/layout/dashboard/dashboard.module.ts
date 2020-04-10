import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardOrderListComponent } from './components/dashboard-order-list/dashboard-order-list.component';
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

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardOverviewComponent,
    DashboardOrderListComponent,
    DashboardProductsComponent,
    DashboardModifyProductComponent,
    DashboardShippingComponent,
    DashboardPaymentComponent
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
    PaginatorModule
  ]
})
export class DashboardModule {}
