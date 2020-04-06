import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit, OnChanges {
  @Input()
  vendor: Vendor;

  constructor() {}

  ngOnInit(): void {
    console.log(this.vendor);
  }

  ngOnChanges(simpleChanges): void {
    console.log(simpleChanges);
  }
}
