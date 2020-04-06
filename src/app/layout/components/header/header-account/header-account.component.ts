import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { Subscription } from 'rxjs';
import { User } from '../../../user/models/user.model';

@Component({
  selector: 'app-header-account',
  templateUrl: './header-account.component.html',
  styleUrls: ['./header-account.component.scss']
})
export class HeaderAccountComponent implements OnInit {
  profileMenuDisplayed: boolean = false;
  currentUser: User;
  userLoggedInSubscription: Subscription;
  loggedIn: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUserLoggedInState();
  }

  onClickOutside() {
    this.profileMenuDisplayed = false;
  }

  private getUserLoggedInState() {
    this.userLoggedInSubscription = this.userService.loginStateChanged().subscribe((currentUser: null | User) => {
      this.currentUser = currentUser;
      this.loggedIn = !!currentUser;
    });
  }
}
