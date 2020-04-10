import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter } from 'rxjs/operators';
import { UserService } from './layout/user/services/user.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  titleSuffix = ' ⋆ Apromag - Aprozar virtual';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private userService: UserService,
    private translate: TranslateService
  ) {
    translate.setDefaultLang('ro');
    translate.use('ro');
  }

  ngOnInit(): void {
    this.userService.initialize();
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.getChild(this.activatedRoute).data.subscribe((data) => {
        this.titleService.setTitle(data.title + this.titleSuffix);
      });
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  getChild(activatedRoute: ActivatedRoute) {
    return activatedRoute.firstChild ? this.getChild(activatedRoute.firstChild) : activatedRoute;
  }
}
