import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  titleSuffix = environment.config.siteTitle;

  constructor(private titleService: Title) {}

  setTitle(title) {
    this.titleService.setTitle(title + this.titleSuffix);
  }
}
