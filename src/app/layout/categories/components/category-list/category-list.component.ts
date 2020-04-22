import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../models/category.model';
import { CategoriesFacadeService } from '../../services/categories-facade.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  categories: Observable<Array<Category>>;

  constructor(private categoriesFacadeService: CategoriesFacadeService) {}

  ngOnInit(): void {
    this.categories = this.categoriesFacadeService.getCategories();
  }
}
