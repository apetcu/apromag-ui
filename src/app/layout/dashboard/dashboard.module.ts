import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoadingModule} from '../../shared/components/loading/loading.module';
import {CompanyItemModule} from '../../shared/components/company-item/company-item.module';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        LoadingModule,
        CompanyItemModule,
        RouterModule
    ]
})
export class DashboardModule {
}
