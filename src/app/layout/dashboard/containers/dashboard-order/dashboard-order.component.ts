import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderFacadeService } from '../../../../shared/services/order/order-facade.service';
import { Order } from '../../../../shared/models/order.model';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orderInfo: Order;
  orderId: number;

  constructor(private route: ActivatedRoute, private orderFacadeService: OrderFacadeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = parseInt(params.orderId, 10);
      this.getOrderInfo(this.orderId);
    });
  }

  getOrderInfo(id: number) {
    this.orderFacadeService.getOrder(id).subscribe((order) => {
      this.orderInfo = order;
    });
  }
}
