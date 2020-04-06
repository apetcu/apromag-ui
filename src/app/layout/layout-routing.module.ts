import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { HomeComponent } from './home/home/home.component';
import { VendorListComponent } from './vendor/containers/vendor-list/vendor-list.component';
import { VendorProductsComponent } from './vendor/containers/vendor-products/vendor-products.component';
import { ContactComponent } from './contact/components/contact/contact.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';
import { ProductComponent } from './product/containers/product/product.component';
import { CartComponent } from './cart/containers/cart/cart.component';

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
        path: 'products/:nameSlug/:vendorId/:productId',
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
