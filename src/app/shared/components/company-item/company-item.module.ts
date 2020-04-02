import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompanyItemComponent} from './company-item.component';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [CompanyItemComponent],
    exports: [CompanyItemComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class CompanyItemModule {
}
