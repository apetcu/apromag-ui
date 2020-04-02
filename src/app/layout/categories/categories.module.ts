import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategoriesRoutingModule} from './categories-routing.module';
import {PageTitleModule} from '../../shared/components/page-title/page-title.module';


@NgModule({
    declarations: [CategoriesComponent, CategoryListComponent],
    imports: [
        CommonModule,
        CategoriesRoutingModule,
        PageTitleModule
    ]
})
export class CategoriesModule {
}
