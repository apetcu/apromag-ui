import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../shared/services/user/user.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  currentUser: User;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
  }

  logOut() {
    this.userService.logOut();
    this.router.navigate(['/']);
  }
}
