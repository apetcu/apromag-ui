import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../user/services/user.service';
import { Vendor } from '../../../vendor/models/vendor';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  vendor: Vendor;
  notifications: Observable<number>;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.notifications = this.userService.getNotificationCount();
    this.vendor = this.userService.getUser().vendor;
  }
}
