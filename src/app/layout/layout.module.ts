import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ClickOutsideModule } from '../shared/directives/click-outside.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './home/home.module';
import { CategoriesModule } from './categories/categories.module';
import { VendorsModule } from './vendors/vendors.module';
import { ContactModule } from './contact/contact.module';
import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AuthenticationModule } from './authentication/authentication.module';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    HeaderModule,
    DashboardModule,
    CategoriesModule,
    VendorsModule,
    RouterModule,
    ClickOutsideModule,
    LayoutRoutingModule,
    AuthenticationModule,
    ContactModule,
    ProductModule,
    CartModule,
    HomeModule
  ]
})
export class LayoutModule {}
