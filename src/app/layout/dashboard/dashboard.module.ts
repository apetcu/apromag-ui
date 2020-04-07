import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DashboardGuard } from './guards/dashboard-guard';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardOverviewComponent } from './containers/dashboard-overview/dashboard-overview.component';
import { DashboardOrderListComponent } from './components/dashboard-order-list/dashboard-order-list.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [DashboardComponent, DashboardOverviewComponent, DashboardOrderListComponent],
  providers: [DashboardGuard],
  imports: [CommonModule, RouterModule, DashboardRoutingModule, TableModule]
})
export class DashboardModule {}
