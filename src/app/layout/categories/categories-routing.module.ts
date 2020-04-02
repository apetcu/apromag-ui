import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryListComponent} from './components/category-list/category-list.component';

const routes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
    },
    {
        path: ':categoryId',
        component: CategoryListComponent,
        pathMatch: 'prefix'
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
export class CategoriesRoutingModule {
}
