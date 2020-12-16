import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WidgetComponent } from './widget.component';

@NgModule({
  declarations: [WidgetComponent],
  exports: [WidgetComponent],
  imports: [CommonModule]
})
export class WidgetModule {}
