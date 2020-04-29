import { Component, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent {
  @Input()
  orderInfo: Order;
}
