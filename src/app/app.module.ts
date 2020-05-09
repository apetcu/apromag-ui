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
import { AuthServiceConfig, FacebookLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserService } from './layout/user/services/user.service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const config = new AuthServiceConfig([
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('2873327746090809')
  }
]);

export function initializeApp1(userService: UserService) {
  return (): Promise<any> => {
    return userService.initialize();
  };
}

export function provideConfig() {
  return config;
}

const cookieConfig: NgcCookieConsentConfig = {
  cookie: {
    domain: 'apromag.ro'
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
  theme: 'edgeless',
  type: 'opt-out'
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
    SocialLoginModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'ro',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgcCookieConsentModule.forRoot(cookieConfig)
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
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    { provide: APP_INITIALIZER, useFactory: initializeApp1, deps: [UserService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
