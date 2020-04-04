import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ClickOutsideModule } from './shared/directives/click-outside.module';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundModule } from './shared/components/not-found/not-found.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule, AppRoutingModule, ClickOutsideModule, HttpClientModule, NotFoundModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
