import {Component, OnInit} from '@angular/core';
import {DashboardFacadeService} from '../../services/dashboard-facade.service';
import {Company} from '../../../companies/models/company';
import {Category} from '../../../categories/models/category.model';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    contentLoading = true;
    companies: Array<Company>;
    categories: Array<Category>;

    constructor(private dashboardFacadeService: DashboardFacadeService) {
    }

    ngOnInit(): void {
        this.getCompanies();
        this.getCategories();
    }

    private getCompanies() {
        this.dashboardFacadeService.getCompanies().subscribe(companies => {
            this.companies = companies;
            this.contentLoading = false;
        });
    }

    private getCategories() {
        this.dashboardFacadeService.getCategories().subscribe(categories => {
            this.categories = categories;
        });
    }

}
