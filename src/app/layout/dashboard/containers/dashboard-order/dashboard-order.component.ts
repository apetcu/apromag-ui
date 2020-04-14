import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderFacadeService } from '../../../../shared/services/order/order-facade.service';
import { Order } from '../../../../shared/models/order.model';
import { OrderStatus } from '../../../../shared/models/order-status';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orderInfo: Order;
  orderStatuses: Array<OrderStatus>;

  orderId: number;

  constructor(private route: ActivatedRoute, private orderFacadeService: OrderFacadeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = parseInt(params.orderId, 10);
      this.getOrderInfo(this.orderId);
      this.getOrderStatuses();
    });
  }

  getOrderInfo(id: number) {
    this.orderFacadeService.getOrder(id).subscribe((order) => {
      this.orderInfo = order;
    });
  }

  getOrderStatuses() {
    this.orderFacadeService.getStatuses().subscribe((statuses) => {
      this.orderStatuses = statuses;
    });
  }
}
