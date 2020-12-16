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

  data: any;

  constructor(private dashboardFacadeService: DashboardFacadeService, private router: Router) {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Total Comenzi',
          backgroundColor: '#42A5F5',
          borderColor: '#1E88E5',
          data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
          label: 'Volum Comenzi',
          backgroundColor: '#9CCC65',
          borderColor: '#7CB342',
          data: [28, 48, 40, 19, 86, 27, 90]
        }
      ]
    };
  }

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
