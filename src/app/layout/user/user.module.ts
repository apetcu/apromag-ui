import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './containers/user/user.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';
import { UserRoutingModule } from './user-routing.module';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserGuard } from './guards/user-guard';
import { ReactiveFormsModule } from '@angular/forms';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserOrderDetailsComponent } from './components/user-order-details/user-order-details.component';
import { OrderListModule } from '../../shared/components/order-list/order-list.module';
import { OrderProductListModule } from '../../shared/components/order-product-list/order-product-list.module';
import { OrderSummaryModule } from '../../shared/components/order-summary/order-summary.module';
import { OrderBadgeModule } from '../../shared/components/order-badge/order-badge.module';
import { TranslateModule } from '@ngx-translate/core';
import { LoadingModule } from '../../shared/components/loading/loading.module';

@NgModule({
  declarations: [UserComponent, UserSettingsComponent, UserDetailsComponent, UserOrdersComponent, UserOrderDetailsComponent],
  providers: [UserGuard],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    OrderListModule,
    OrderProductListModule,
    OrderSummaryModule,
    OrderBadgeModule,
    TranslateModule,
    LoadingModule
  ]
})
export class UserModule {}
