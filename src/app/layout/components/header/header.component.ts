import { Component, OnInit } from '@angular/core';
import { MenuItem } from './models/menu-item';
import { NavigationStart, Router } from '@angular/router';
import { CategoriesFacadeService } from '../../categories/services/categories-facade.service';
import { Category } from '../../categories/models/category.model';
import { SearchService } from '../../../shared/components/search/services/search.service';
import { LocationPickerService } from '../../../shared/components/location-picker/services/location-picker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  menuOpen = false;
  categoryMenus: Array<MenuItem>;
  categoriesOpen = false;

  constructor(
    private router: Router,
    private categoriesFacadeService: CategoriesFacadeService,
    private searchService: SearchService,
    private locationPickerService: LocationPickerService
  ) {}

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

  onSearch(): void {
    this.searchService.showSearch();
  }

  onPickLocation(): void {
    this.locationPickerService.showLocationPicker();
  }

  private getCategoryMenu(category: Category) {
    return {
      title: category.name,
      link: category.urlSlug,
      children: category.children.map((subcategory) => this.getCategoryMenu(subcategory))
    };
  }
}
