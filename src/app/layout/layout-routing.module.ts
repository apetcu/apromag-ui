import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {DashboardComponent} from './dashboard/components/dashboard/dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        pathMatch: 'prefix',
        children: [
            {
                path: '', redirectTo: 'dashboard', pathMatch: 'full'
            },
            {
                path: 'dashboard', component: DashboardComponent, pathMatch: 'full'
            },
            {
                path: 'categories',
                loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule),
                pathMatch: 'prefix'
            },
            {
                path: 'companies',
                loadChildren: () => import('./companies/companies.module').then(m => m.CompaniesModule),
                pathMatch: 'prefix'
            },
            {
                path: 'user',
                loadChildren: () => import('./user/user.module').then(m => m.UserModule),
                pathMatch: 'prefix'
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
export class LayoutRoutingModule {
}
