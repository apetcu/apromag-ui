import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {
  titleSuffix = ' ⋆ Aprozi - Aprozar virtual';

  constructor(private titleService: Title) {}

  setTitle(title) {
    this.titleService.setTitle(title + this.titleSuffix);
  }
}
