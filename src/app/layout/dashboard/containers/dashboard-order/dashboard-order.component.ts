import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderFacadeService } from '../../../../shared/services/order/order-facade.service';
import { Order } from '../../../../shared/models/order.model';
import { OrderStatus } from '../../../../shared/models/order-status';
import { UserService } from '../../../user/services/user.service';
import { OrderStatusForm } from './order-status-form';
import { AlertService } from '../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-dashboard-order',
  templateUrl: './dashboard-order.component.html',
  styleUrls: ['./dashboard-order.component.scss']
})
export class DashboardOrderComponent implements OnInit {
  orderInfo: Order;
  orderStatuses: Array<OrderStatus>;
  orderStatusForm: OrderStatusForm;

  orderId: number;

  constructor(
    private route: ActivatedRoute,
    private orderFacadeService: OrderFacadeService,
    private userService: UserService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.orderId = parseInt(params.orderId, 10);
      this.getOrderInfo(this.orderId);
      this.getOrderStatuses();
    });
  }

  changeOrderStatus() {
    this.orderFacadeService.setStatus(this.orderId, this.orderStatusForm.value).subscribe((order) => {
      this.alertService.showSuccess('Starea comenzii a fost actualizata ');
      this.orderInfo.status = order.status;
    });
  }

  getOrderInfo(id: number) {
    this.orderFacadeService.getOrder(id).subscribe((order) => {
      this.orderInfo = order;
      if (!order.seenAt) {
        this.userService.decreaseNotifications();
      }
      this.orderStatusForm = new OrderStatusForm(this.orderInfo.status, this.orderInfo.remarks);
    });
  }

  getOrderStatuses() {
    this.orderFacadeService.getStatuses().subscribe((statuses) => {
      this.orderStatuses = statuses;
    });
  }
}
