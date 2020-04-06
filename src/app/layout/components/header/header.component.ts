import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  profileMenuDisplayed = false;
  menuItems: Array<MenuItem> = [
    { title: 'Acasa', link: '/home' },
    { title: 'Producatori', link: '/vendor' },
    {
      title: 'Categorii',
      link: '/categories',
      children: [
        { title: 'Cat 1', link: '/categories/1' },
        { title: 'Cat 3', link: '/categories/2' },
        { title: 'Cat 2', link: '/categories/3' }
      ]
    },
    { title: 'Contact', link: '/contact' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.menuOpen = false;
      }
    });
  }

  onClickOutside() {
    if (this.profileMenuDisplayed) {
      this.profileMenuDisplayed = false;
    }
  }
}
