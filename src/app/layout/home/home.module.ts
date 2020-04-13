import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  declarations: [HomeComponent],
  exports: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, AutoCompleteModule]
})
export class HomeModule {}
