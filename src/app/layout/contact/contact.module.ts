import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, PageTitleModule, TranslateModule]
})
export class ContactModule {}
