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

@NgModule({
  declarations: [UserComponent, UserSettingsComponent, UserDetailsComponent, UserOrdersComponent, UserOrderDetailsComponent],
  providers: [UserGuard],
  imports: [CommonModule, UserRoutingModule, ReactiveFormsModule]
})
export class UserModule {}
