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
  rowsPerPage: number = 9;
  loading: boolean;
  totalRecords: number;
  orders: Order[];
  constructor(private dashboardFacadeService: DashboardFacadeService) {}

  ngOnInit() {
    this.loadData(1);
  }

  loadCarsLazy(event) {
    if (event.first) {
      this.loadData(event.first / event.rows + 1);
    } else {
      this.loadData(event.first + 1);
    }
  }

  loadData(pageNo: number) {
    this.loading = true;
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage)).subscribe((data) => {
      this.orders = data.content;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }
}
