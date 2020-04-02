import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesComponent} from './components/companies/companies.component';
import {CompanyDetailsComponent} from './components/company-details/company-details.component';


const routes: Routes = [
    {
        path: '',
        component: CompaniesComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: 'details/:companyId', component: CompanyDetailsComponent, pathMatch: 'prefix'
            }
        ]
    }

];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class CompaniesRoutingModule {
}
