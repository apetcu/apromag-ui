import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { ClickOutsideModule } from '../shared/directives/click-outside/click-outside.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { HeaderModule } from './components/header/header.module';
import { HomeModule } from './home/home.module';
import { ContactModule } from './contact/contact.module';
import { ProductModule } from './product/product.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    HeaderModule,
    RouterModule,
    ClickOutsideModule,
    LayoutRoutingModule,
    ContactModule,
    ProductModule,
    HomeModule,
    TranslateModule
  ]
})
export class LayoutModule {}
