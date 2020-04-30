import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTitleComponent } from './page-title.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PageTitleComponent],
  exports: [PageTitleComponent],
  imports: [CommonModule, TranslateModule]
})
export class PageTitleModule {}
