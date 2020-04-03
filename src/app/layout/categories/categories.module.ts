import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesComponent} from './components/categories/categories.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {PageTitleModule} from "../../shared/components/page-title/page-title.module";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [CategoriesComponent, CategoryListComponent],
    imports: [
        CommonModule,
        RouterModule,
        PageTitleModule
    ]
})
export class CategoriesModule {
}
