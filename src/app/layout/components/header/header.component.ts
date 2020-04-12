import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { NavigationStart, Router } from '@angular/router';
import { CategoriesFacadeService } from '../../categories/services/categories-facade.service';
import { Category } from '../../categories/models/category.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  categoryMenus: Array<MenuItem>;

  constructor(private router: Router, private categoriesFacadeService: CategoriesFacadeService) {}

  ngOnInit(): void {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.menuOpen = false;
      }
    });
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesFacadeService.getCategories().subscribe((categories) => {
      this.categoryMenus = categories.map((entry) => this.getCategoryMenu(entry));
    });
  }

  private getCategoryMenu(category: Category) {
    return {
      title: category.name,
      link: `/categories/${category.id}`,
      children: category.children.map((subcategory) => this.getCategoryMenu(subcategory))
    };
  }
}
