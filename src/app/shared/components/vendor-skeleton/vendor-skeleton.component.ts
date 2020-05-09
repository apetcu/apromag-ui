import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vendor-skeleton',
  templateUrl: './vendor-skeleton.component.html',
  styleUrls: ['./vendor-skeleton.component.scss']
})
export class VendorSkeletonComponent implements OnInit {
  @Input()
  displayType: string = 'grid';
  constructor() {}

  ngOnInit(): void {}
}
