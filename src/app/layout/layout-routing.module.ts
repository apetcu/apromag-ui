import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home/home.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ProductComponent } from './product/containers/product/product.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
        data: {
          title: 'Acasa'
        }
      },
      {
        path: 'products/:nameSlug/:productId',
        component: ProductComponent,
        data: {
          title: 'Produs'
        }
      },
      {
        path: 'vendor',
        loadChildren: () => import('./vendor/vendor.module').then((m) => m.VendorModule)
      },
      {
        path: 'static',
        loadChildren: () => import('./static/static.module').then((m) => m.StaticModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
      },
      {
        path: 'auth',
        loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./cart/cart.module').then((m) => m.CartModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./categories/categories.module').then((m) => m.CategoriesModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          title: 'Contact'
        }
      },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {}
