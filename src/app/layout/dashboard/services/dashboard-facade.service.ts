import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Company} from '../../companies/models/company';
import {CompaniesFacadeService} from '../../companies/services/companies-facade.service';
import {CategoriesFacadeService} from '../../categories/services/categories-facade.service';
import {Category} from '../../categories/models/category.model';

@Injectable({
    providedIn: 'root'
})
export class DashboardFacadeService {

    constructor(private companiesFacadeService: CompaniesFacadeService, private categoriesFacadeService: CategoriesFacadeService) {
    }

    getCompanies(): Observable<Array<Company>> {
        return this.companiesFacadeService.getCompanies();
    }

    getCategories(): Observable<Array<Category>> {
        return this.categoriesFacadeService.getCategories();
    }
}
