import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './containers/categories/categories.component';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { CategoryProductsComponent } from './components/category-products/category-products.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: CategoryListComponent,
        pathMatch: 'prefix',
        data: {
          title: 'Categorii'
        }
      },
      {
        path: ':nameSlug/:categoryId',
        component: CategoryProductsComponent,
        data: {
          title: 'Categorii'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule {}
