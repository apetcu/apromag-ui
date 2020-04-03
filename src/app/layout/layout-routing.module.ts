import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {HomeComponent} from "./home/home/home.component";
import {CategoriesComponent} from "./categories/components/categories/categories.component";
import {VendorsComponent} from "./vendors/components/vendors/vendors.component";
import {VendorProductsComponent} from "./vendors/components/vendor-products/vendor-products.component";
import {ContactComponent} from "./contact/components/contact/contact.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent,
            },/*
            {
                path: 'categories',
                component: CategoriesComponent,
            },*/
            {
                path: 'vendors',
                component: VendorsComponent
            },
            {
                path: 'vendors/:assetId',
                component: VendorProductsComponent
            },
            {
                path: 'contact',
                component: ContactComponent
            }
        ],
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },

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
