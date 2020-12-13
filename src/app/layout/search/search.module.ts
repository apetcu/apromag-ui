import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './containers/search.component';
import { SearchRoutingModule } from './search-routing.module';
import { ProductListModule } from '../../shared/components/product-list/product-list.module';
import { InfoBoxModule } from '../../shared/components/info-box/info-box.module';
import { PageTitleModule } from '../../shared/components/page-title/page-title.module';

@NgModule({
  declarations: [SearchComponent],
  imports: [CommonModule, SearchRoutingModule, ProductListModule, InfoBoxModule, PageTitleModule]
})
export class SearchModule {}
