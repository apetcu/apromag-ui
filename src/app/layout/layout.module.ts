import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {DashboardModule} from './dashboard/dashboard.module';
import {HeaderComponent} from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {ClickOutsideModule} from '../shared/directives/click-outside.module';
import {LayoutRoutingModule} from './layout-routing.module';


@NgModule({
    declarations: [LayoutComponent, HeaderComponent, FooterComponent],
    imports: [
        CommonModule,
        DashboardModule,
        RouterModule,
        ClickOutsideModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule {
}
