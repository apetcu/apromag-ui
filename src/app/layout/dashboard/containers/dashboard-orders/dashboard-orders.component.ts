import { Component, OnInit } from '@angular/core';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { Order } from '../../../../shared/models/order.model';
import { Router } from '@angular/router';
import { OrderFacadeService } from '../../../../shared/services/order/order-facade.service';
import { Observable } from 'rxjs';

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

  statuses: Observable<Array<any>>;

  constructor(
    private dashboardFacadeService: DashboardFacadeService,
    private router: Router,
    private orderFacadeService: OrderFacadeService
  ) {}

  ngOnInit() {
    this.loadData(1);

    this.statuses = this.orderFacadeService.getStatuses();
  }

  loadData(pageNo: number, status = '') {
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt', 'desc'), status).subscribe((data) => {
      this.orders = data.data;
      this.totalRecords = data.pagination.totalCount;
      this.loading = false;
    });
  }

  onPageChange(page: any) {
    this.loadData(page.page + 1);
  }

  onOrderClick(order: Order) {
    this.router.navigate(['/dashboard/orders/' + order.id]);
  }
}
