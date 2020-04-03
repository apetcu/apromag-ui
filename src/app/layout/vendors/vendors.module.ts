import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VendorsComponent} from './components/vendors/vendors.component';
import {VendorProductsComponent} from './components/vendor-products/vendor-products.component';
import {PageTitleModule} from "../../shared/components/page-title/page-title.module";
import { VendorComponent } from './components/vendor/vendor.component';
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [VendorsComponent, VendorProductsComponent, VendorComponent],
    imports: [
        CommonModule,
        PageTitleModule,
        RouterModule,
    ]
})
export class VendorsModule {
}
