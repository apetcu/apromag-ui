import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './components/companies/companies.component';
import { CompanyDetailsComponent } from './components/company-details/company-details.component';
import {RouterModule} from '@angular/router';
import {CompaniesRoutingModule} from './companies-routing.module';



@NgModule({
  declarations: [CompaniesComponent, CompanyDetailsComponent],
    imports: [
        CommonModule,
        RouterModule,
        CompaniesRoutingModule
    ]
})
export class CompaniesModule { }
