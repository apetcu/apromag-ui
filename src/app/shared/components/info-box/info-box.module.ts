import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoBoxComponent } from './info-box.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [InfoBoxComponent],
  exports: [InfoBoxComponent],
  imports: [CommonModule, TranslateModule]
})
export class InfoBoxModule {}
