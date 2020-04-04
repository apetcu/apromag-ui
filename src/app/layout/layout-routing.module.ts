import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {HomeComponent} from "./home/home/home.component";
import {CategoriesComponent} from "./categories/components/categories/categories.component";
import {VendorsComponent} from "./vendors/components/vendors/vendors.component";
import {VendorProductsComponent} from "./vendors/components/vendor-products/vendor-products.component";
import {ContactComponent} from "./contact/components/contact/contact.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {LoginComponent} from "./authentication/components/login/login.component";
import {RegisterComponent} from "./authentication/components/register/register.component";

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
            },/*
            {
                path: 'categories',
                component: CategoriesComponent,
            },*/
            {
                path: 'vendors',
                component: VendorsComponent,
                data: {
                    title: 'Producatori'
                }
            },
            {
                path: 'vendors/:vendorId',
                component: VendorProductsComponent
            },
            {
                path: 'auth/login',
                component: LoginComponent,
                data: {
                    title: 'Autentificare'
                }
            },
            {
                path: 'auth/register',
                component: RegisterComponent,
                data: {
                    title: 'Inregistrare'
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    title: 'Contact'
                }
            }, {path: '', redirectTo: '/home', pathMatch: 'full'},

        ],
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: '**', component: NotFoundComponent}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class LayoutRoutingModule {
}
