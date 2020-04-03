import {Component, OnInit} from '@angular/core';
import {MenuItem} from "./models/menu-item";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    isCollapsed = true;
    profileMenuDisplayed = false;
    menuItems: Array<MenuItem> = [
        {title: "Acasa", link: '/home'},
        {title: "Producatori", link: '/vendors'},
        {
            title: "Categorii", link: '/categories', children: [
                {title: 'Cat 1', link: '/categories/1'},
                {title: 'Cat 3', link: '/categories/2'},
                {title: 'Cat 2', link: '/categories/3'},
            ]
        },
        {title: "Contact", link: 'contact'},
    ];

    constructor() {
    }

    ngOnInit(): void {
    }

    onClickOutside() {
        if (this.profileMenuDisplayed) {
            this.profileMenuDisplayed = false;
        }
    }

}
