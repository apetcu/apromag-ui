import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../../../shared/models/user';

@Component({
  selector: 'app-header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit {
  currentUser: User;
  userLoggedInSubscription: Subscription;
  loggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserLoggedInState();
  }

  private getUserLoggedInState() {
    this.userLoggedInSubscription = this.userService.loginStateChanged().subscribe((currentUser: null | User) => {
      this.currentUser = currentUser;
      this.loggedIn = !!currentUser;
    });
  }
}
