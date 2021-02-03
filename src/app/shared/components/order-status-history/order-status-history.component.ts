import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-order-status-history',
  templateUrl: './order-status-history.component.html',
  styleUrls: ['./order-status-history.component.scss']
})
export class OrderStatusHistoryComponent implements OnInit {
  @Input()
  orderId: number;

  history: any;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.get(`orders/${this.orderId}/status/history`).subscribe((history) => {
      console.log(history);
      this.history = history;
    });
  }
}
