import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { StaticFacadeService } from '../../services/static-facade.service';
import { StaticPage } from '../../models/static-page.model';
import { PageTitleService } from '../../../../shared/services/page-title/page-title.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  page: StaticPage;

  constructor(
    private route: ActivatedRoute,
    private staticFacadeService: StaticFacadeService,
    private pageTitleService: PageTitleService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const pageId = parseInt(params.id, 10);
      this.getPageInformation(pageId);
    });
  }

  private getPageInformation(pageId: number) {
    this.staticFacadeService.getById(pageId).subscribe((pageInfo) => {
      this.page = pageInfo;
      this.pageTitleService.setTitle(this.page.title);
    });
  }
}
