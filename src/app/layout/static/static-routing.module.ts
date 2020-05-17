import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaticComponent } from './containers/static/static.component';
import { FaqComponent } from './components/faq/faq.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component';
import { StaticPage } from './models/static-page.model';
import { PageComponent } from './components/page/page.component';

const routes: Routes = [
  {
    path: '',
    component: StaticComponent,
    children: [
      {
        path: 'faq',
        component: FaqComponent,
        data: {
          title: 'FAQ'
        }
      },
      {
        path: ':id/:title',
        component: PageComponent
      },
      { path: '', redirectTo: '/static/faq', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}
