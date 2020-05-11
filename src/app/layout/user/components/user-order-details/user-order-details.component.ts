import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderStatusForm } from '../../../dashboard/containers/dashboard-order/order-status-form';
import { OrderFacadeService } from '../../../../shared/services/order/order-facade.service';
import { Order } from '../../../../shared/models/order.model';

@Component({
  selector: 'app-user-order-details',
  templateUrl: './user-order-details.component.html',
  styleUrls: ['./user-order-details.component.scss']
})
export class UserOrderDetailsComponent implements OnInit {
  orderId: number = null;
  orderInfo: Order;

  constructor(private route: ActivatedRoute, private orderFacadeService: OrderFacadeService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = parseInt(params.orderId, 10);
      this.getOrderInfo(this.orderId);
    });
  }

  getOrderInfo(id: number) {
    this.orderFacadeService.getCustomerOrderById(id).subscribe((order) => {
      this.orderInfo = order;
    });
  }
}
