import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './containers/cart/cart.component';
import { CartSummaryComponent } from './containers/cart-summary/cart-summary.component';
import { CartFinishComponent } from './containers/cart-finish/cart-finish.component';

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
      },
      {
        path: 'finish/:orderId',
        component: CartFinishComponent,
        data: {
          title: 'Comanda a fost trimisa'
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
