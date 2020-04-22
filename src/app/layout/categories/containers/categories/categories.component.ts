import {Component, OnInit} from '@angular/core';
import {CategoriesFacadeService} from '../../services/categories-facade.service';
import {Category} from '../../models/category.model';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
    categories: Observable<Array<Category>>;

    constructor(private categoriesFacadeService: CategoriesFacadeService) {
    }

    ngOnInit(): void {
      this.categories = this.categoriesFacadeService.getCategories();
    }
}
