import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-badge',
  templateUrl: './order-badge.component.html',
  styleUrls: ['./order-badge.component.scss']
})
export class OrderBadgeComponent {
  @Input()
  status: string;
}
