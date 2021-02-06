import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ClickOutsideModule } from './shared/directives/click-outside/click-outside.module';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { NotFoundModule } from './shared/components/not-found/not-found.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpErrorInterceptor } from './shared/interceptors/http-error.interceptor';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserService } from './layout/user/services/user.service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { LightboxModule } from 'ngx-lightbox';
import { RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module } from 'ng-recaptcha';
import { VendorInfoFlatComponent } from './shared/components/vendor-info-flat/vendor-info-flat.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json?v=3');
}

export function initializeApp1(userService: UserService) {
  return (): Promise<any> => {
    return userService.initialize();
  };
}

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'aprozi.ro'
  },
  content: {
    href: '/static/cookies',
    target: '_self'
  },
  palette: {
    popup: {
      background: '#28a745',
      text: '#ffffff',
      link: '#ffffff'
    },
    button: {
      background: '#fcfb2e',
      text: '#000000',
      border: 'transparent'
    }
  },
  theme: 'classic',
  type: 'info'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    ClickOutsideModule,
    HttpClientModule,
    NotFoundModule,
    BrowserAnimationsModule,
    LightboxModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgcCookieConsentModule.forRoot(cookieConfig),
    RecaptchaV3Module
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [UserService], multi: true },
    { provide: RECAPTCHA_V3_SITE_KEY, useValue: '6LfBATwaAAAAABKGl_0R_rDt423GVCfvlqDr1FD0' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
