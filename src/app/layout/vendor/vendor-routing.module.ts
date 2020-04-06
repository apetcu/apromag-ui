import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorContainerComponent } from './containers/vendor-container/vendor-container.component';
import { VendorListComponent } from './containers/vendor-list/vendor-list.component';
import { VendorProductsComponent } from './containers/vendor-products/vendor-products.component';

const routes: Routes = [
  {
    path: '',
    component: VendorContainerComponent,
    pathMatch: 'prefix',
    children: [
      {
        path: '',
        component: VendorListComponent,
        data: {
          title: 'Producatori'
        }
      },
      {
        path: ':nameSlug/:vendorId',
        component: VendorProductsComponent,
        data: {
          title: 'Producatori'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule {}
