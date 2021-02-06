import { Component, Input, OnInit } from '@angular/core';
import { Vendor } from '../../../layout/vendor/models/vendor';

@Component({
  selector: 'app-vendor-info-flat',
  templateUrl: './vendor-info-flat.component.html',
  styleUrls: ['./vendor-info-flat.component.scss']
})
export class VendorInfoFlatComponent {
  @Input()
  vendor: Vendor;
}
