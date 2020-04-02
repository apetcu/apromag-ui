import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from './login/login.module';
import { NotFoundComponent } from './layout/components/not-found/not-found.component';
import {LayoutModule} from './layout/layout.module';
import {ClickOutsideModule} from './shared/directives/click-outside.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
    ],
    imports: [
        BrowserModule,
        LoginModule,
        LayoutModule,
        AppRoutingModule,
        ClickOutsideModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
