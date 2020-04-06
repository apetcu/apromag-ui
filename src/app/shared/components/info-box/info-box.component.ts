import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-box',
  templateUrl: './info-box.component.html',
  styleUrls: ['./info-box.component.scss']
})
export class InfoBoxComponent implements OnInit {
  @Input()
  type: 'success' | 'danger' | 'info' | 'warning' | 'default' | 'notice' = 'success';

  @Input()
  title: string = '';

  constructor() {}

  ngOnInit(): void {}
}
