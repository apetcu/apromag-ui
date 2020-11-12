import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { VendorModule } from '../vendor/vendor.module';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AutoCompleteModule, CarouselModule, TranslateModule, VendorModule]
})
export class HomeModule {}
