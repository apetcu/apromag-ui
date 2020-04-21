import { Component, OnInit } from '@angular/core';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { Order } from '../../../../shared/models/order.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-orders',
  templateUrl: './dashboard-orders.component.html',
  styleUrls: ['./dashboard-orders.component.scss']
})
export class DashboardOrdersComponent implements OnInit {
  orders: Array<Order>;
  totalRecords: number = 0;
  loading: boolean = true;
  rowsPerPage: number = 25;

  constructor(private dashboardFacadeService: DashboardFacadeService, private router: Router) {}

  ngOnInit() {
    this.loadData(1);
  }

  loadData(pageNo: number) {
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt')).subscribe((data) => {
      this.orders = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }

  onOrderClick(order: Order) {
    this.router.navigate(['/dashboard/orders/' + order.id]);
  }
}
