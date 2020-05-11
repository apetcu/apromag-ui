import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../shared/models/order.model';
import { DashboardFacadeService } from '../../../dashboard/services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { UserFacadeService } from '../../services/user-facade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  orders: Array<Order>;
  totalRecords: number = 0;
  loading: boolean = false;
  rowsPerPage: number = 25;

  constructor(private userFacadeService: UserFacadeService, private router: Router) {}

  ngOnInit() {
    this.loadData(1);
  }

  loadData(pageNo: number) {
    this.userFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt')).subscribe((data) => {
      this.orders = data.data;
      this.totalRecords = data.totalElements;
      this.loading = false;
    });
  }

  onOrderClick(order: Order) {
    this.router.navigate(['/user/orders/' + order.id]);
  }
}
