import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { UserService } from './layout/user/services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { PageTitleService } from './shared/services/page-title/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  //keep refs to subscriptions to be able to unsubscribe later
  private popupOpenSubscription: Subscription;
  private popupCloseSubscription: Subscription;
  private initializeSubscription: Subscription;
  private statusChangeSubscription: Subscription;
  private revokeChoiceSubscription: Subscription;
  private noCookieLawSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: PageTitleService,
    private userService: UserService,
    private translate: TranslateService,
    private ccService: NgcCookieConsentService
  ) {
    translate.setDefaultLang('ro');
    translate.use('ro');
  }

  ngOnInit(): void {
    this.userService.initialize();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.getChild(this.activatedRoute).data.subscribe((data) => {
        this.titleService.setTitle(data.title || '');
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    this.initCookieConsent();
  }

  initCookieConsent() {
    if (localStorage.getItem('cookieConsent')) {
      this.ccService.destroy();
      return;
    }
    this.translate //
      .get(['cookie.header', 'cookie.message', 'cookie.dismiss', 'cookie.allow', 'cookie.deny', 'cookie.link', 'cookie.policy'])
      .subscribe((data) => {
        this.ccService.getConfig().content = this.ccService.getConfig().content || {};
        // Override default messages with the translated ones
        this.ccService.getConfig().content.header = data['cookie.header'];
        this.ccService.getConfig().content.message = data['cookie.message'];
        this.ccService.getConfig().content.dismiss = data['cookie.dismiss'];
        this.ccService.getConfig().content.allow = data['cookie.allow'];
        this.ccService.getConfig().content.deny = data['cookie.deny'];
        this.ccService.getConfig().content.link = data['cookie.link'];
        this.ccService.getConfig().content.policy = data['cookie.policy'];

        this.ccService.destroy(); //remove previous cookie bar (with default messages)
        this.ccService.init(this.ccService.getConfig()); // update config with translated messages
      });

    this.statusChangeSubscription = this.ccService.statusChange$.subscribe((event: NgcStatusChangeEvent) => {
      // you can use this.ccService.getConfig() to do stuff...
      if (event.status === 'deny') {
        window.location.href = 'http://www.google.ro/';
      } else {
        localStorage.setItem('cookieConsent', 'true');
      }
    });
  }

  ngOnDestroy() {
    this.statusChangeSubscription && this.statusChangeSubscription.unsubscribe();
  }

  getChild(activatedRoute: ActivatedRoute) {
    return activatedRoute.firstChild ? this.getChild(activatedRoute.firstChild) : activatedRoute;
  }
}
