import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './containers/cart/cart.component';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';

const routes: Routes = [
  {
    path: '',
    component: CartComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: CartSummaryComponent,
        data: {
          title: 'Cosul de cumparaturi'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
