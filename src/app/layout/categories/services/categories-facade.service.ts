import {Injectable} from '@angular/core';
import {Observable, of, OperatorFunction} from 'rxjs';
import {map} from 'rxjs/operators';
import {CategoriesApiService} from './categories-api.service';
import {Category} from '../models/category.model';

@Injectable({
    providedIn: 'root'
})
export class CategoriesFacadeService {
    private cachedCategories: Array<Category>;

    constructor(private categoriesApiService: CategoriesApiService) {
    }

    getCategories(): Observable<Array<Category>> {
        if (this.cachedCategories) {
            return of(this.cachedCategories);
        }
        return this.categoriesApiService.getCategories().pipe(this.mapCategoriesToDomainModel(), map(entries => {
            this.cachedCategories = entries;
            return entries;
        }));
    }

    private mapCategoriesToDomainModel(): OperatorFunction<any, Array<Category>> {
        return map(companiesResponse =>
            companiesResponse.map(entry => new Category(entry)));

    }
}
