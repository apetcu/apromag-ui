import { Component, Input } from '@angular/core';
import { Order } from '../../models/order.model';

@Component({
  selector: 'app-order-product-list',
  templateUrl: './order-product-list.component.html',
  styleUrls: ['./order-product-list.component.scss']
})
export class OrderProductListComponent {
  @Input()
  orderInfo: Order;
}
