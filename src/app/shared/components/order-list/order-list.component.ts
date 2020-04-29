import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Order } from '../../models/order.model';
import { UserRoles } from '../../../layout/user/models/user-roles';
import { UserService } from '../../../layout/user/services/user.service';

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

  userRole: UserRoles;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userRole = this.userService.getUser().role;
  }

  pageChange(event) {
    this.onPageChange.emit(event);
  }

  clickOrder(order: Order) {
    this.onOrderClick.emit(order);
  }
}
