import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DashboardFacadeService } from '../../../layout/dashboard/services/dashboard-facade.service';
import { PaginationInfo } from '../../models/pagination-info.model';
import { Order } from '../../models/order.model';

@Component({
  selector: 'order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input()
  rowsPerPage: number = 25;
  @Input()
  totalRecords: number = 0;
  @Input()
  loading: boolean = true;
  @Input()
  orders: Array<Order> = [];
  @Output('onPageChange')
  onPageChange: EventEmitter<any> = new EventEmitter<any>(null);
  @Output('onOrderClick')
  onOrderClick: EventEmitter<any> = new EventEmitter<any>(null);

  constructor() {}

  ngOnInit() {}

  pageChange(event) {
    this.onPageChange.emit(event);
  }

  clickOrder(order: Order) {
    this.onOrderClick.emit(order);
  }
}
