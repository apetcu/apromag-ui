import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss']
})
export class WidgetComponent {
  @Input()
  primaryText: string;
  @Input()
  secondaryText: string;
  @Input()
  color: string;
  @Input()
  icon: string = 'moon';
}
