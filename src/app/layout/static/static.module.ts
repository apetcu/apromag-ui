import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './containers/static/static.component';
import { RouterModule } from '@angular/router';
import { FaqComponent } from './components/faq/faq.component';
import { StaticRoutingModule } from './static-routing.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [StaticComponent, FaqComponent],
  imports: [CommonModule, RouterModule, StaticRoutingModule, PageTitleModule]
})
export class StaticModule {}
