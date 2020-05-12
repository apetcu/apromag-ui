import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../shared/models/order.model';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {
  orders: Array<Order>;
  totalRecords: number = 0;
  loading: boolean = true;
  rowsPerPage: number = 25;

  constructor(private dashboardFacadeService: DashboardFacadeService, private router: Router) {}

  ngOnInit() {
    this.loadData(1);
  }

  loadData(pageNo: number) {
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt', 'desc')).subscribe((data) => {
      this.orders = data.data;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }

  onOrderClick(order: Order) {
    this.router.navigate(['/dashboard/orders/' + order.id]);
  }
}
