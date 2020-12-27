import { Component, OnInit } from '@angular/core';
import { Order } from '../../../../shared/models/order.model';
import { DashboardFacadeService } from '../../services/dashboard-facade.service';
import { PaginationInfo } from '../../../../shared/models/pagination-info.model';
import { Router } from '@angular/router';
import { OrdersSummary } from '../../models/orders-summary.model';
import { localeMonths } from '../../../../shared/enum/locale';

@Component({
  selector: 'app-dashboard-overview',
  templateUrl: './dashboard-overview.component.html',
  styleUrls: ['./dashboard-overview.component.scss']
})
export class DashboardOverviewComponent implements OnInit {
  orders: Array<Order>;
  ordersSummary: OrdersSummary;
  totalRecords: number = 0;
  lastOrdersLoading: boolean = true;
  summaryLoading: boolean = true;
  rowsPerPage: number = 25;

  data: any;
  chartOptions: any;
  chartPlugins: any;

  currentMonthName: string;

  constructor(private dashboardFacadeService: DashboardFacadeService, private router: Router) {
    this.chartOptions = {
      tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
          label: function(t, d) {
            if (t.datasetIndex === 0) {
              return t.yLabel.toFixed(2) + 'RON';
            } else if (t.datasetIndex === 1) {
              if (t.yLabel.toString().length === 9) {
                return Math.round(+t.yLabel.toString().replace(/(\d{3})(.*)/, '$1.$2')) + ' vanzari';
              } else return Math.round(+t.yLabel.toString().replace(/(\d{2})(.*)/, '$1.$2')) + ' vanzari';
            }
          }
        }
      }
    };
    this.chartPlugins = [
      {
        afterDraw: function(chart) {
          if (chart.data.datasets.length === 0) {
            // No data is present
            const ctx = chart.chart.ctx;
            const width = chart.chart.width;
            const height = chart.chart.height;
            chart.clear();

            ctx.save();
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.font = "18px normal 'Poppins'";
            ctx.fillText('Nu exista comenzi in trecut', width / 2, height / 2);
            ctx.restore();
          }
        }
      }
    ];

    const date = new Date();
    this.currentMonthName = localeMonths.ro[date.getMonth()];
  }

  ngOnInit() {
    this.loadData(1);
    this.loadSummary();
  }

  loadData(pageNo: number) {
    this.dashboardFacadeService.getOrders(new PaginationInfo(pageNo, this.rowsPerPage, 'createdAt', 'desc')).subscribe((data) => {
      this.orders = data.data;
      this.totalRecords = data.totalElements;
      this.lastOrdersLoading = false;
    });
  }

  loadSummary() {
    this.dashboardFacadeService.getSummary().subscribe((data) => {
      this.summaryLoading = false;
      this.ordersSummary = data;
      this.buildChart(data);
    });
  }

  private buildChart(data: OrdersSummary) {
    this.data = {
      labels: data.aggregated.map((entry) => entry.monthName),
      datasets: data.aggregated.length
        ? [
            {
              label: 'Total Comenzi',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: data.aggregated.map((entry) => entry.total)
            },
            {
              label: 'Volum Comenzi',
              backgroundColor: '#9CCC65',
              borderColor: '#7CB342',
              data: data.aggregated.map((entry) => entry.count)
            }
          ]
        : []
    };
  }

  onOrderClick(order: Order) {
    this.router.navigate(['/dashboard/orders/' + order.id]);
  }
}
