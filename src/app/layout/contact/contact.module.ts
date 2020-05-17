import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact/contact.component';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, PageTitleModule, TranslateModule, ReactiveFormsModule]
})
export class ContactModule {}
