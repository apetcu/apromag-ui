import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item-skeleton',
  templateUrl: './product-item-skeleton.component.html',
  styleUrls: ['./product-item-skeleton.component.scss']
})
export class ProductItemSkeletonComponent implements OnInit {
  @Input()
  displayType: string = 'grid';
  constructor() {}

  ngOnInit(): void {}
}
