import {Component, Input, OnInit} from '@angular/core';
import {Vendor} from "../../models/vendor";

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.scss']
})
export class VendorComponent implements OnInit {
  @Input() vendor: Vendor;

  constructor() { }

  ngOnInit(): void {
  }

}
