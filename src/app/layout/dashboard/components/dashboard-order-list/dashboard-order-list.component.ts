import { Component, OnInit } from '@angular/core';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { Order } from '../../../../shared/models/order.model';

@Component({
  selector: 'app-dashboard-order-list',
  templateUrl: './dashboard-order-list.component.html',
  styleUrls: ['./dashboard-order-list.component.scss']
})
export class DashboardOrderListComponent implements OnInit {
  rowsPerPage: number = 25;
  loading: boolean;
  totalRecords: number;
  orders: Order[];
  constructor(private dashboardFacadeService: DashboardFacadeService) {}

  ngOnInit() {
    this.loadData(1);
  }

  onPageChange(event) {
    this.loadData(event.page + 1);
  }

  loadData(pageNo: number) {
    this.loading = true;
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt')).subscribe((data) => {
      this.orders = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }
}
