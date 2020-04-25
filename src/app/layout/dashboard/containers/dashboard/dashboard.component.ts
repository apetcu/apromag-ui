import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  newOrders: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.newOrders = this.userService.getUser().newOrders;
  }
}
