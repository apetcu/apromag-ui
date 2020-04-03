import { Component, OnInit } from '@angular/core';
import {Vendor} from "../../models/vendor";
import {VendorsFacadeService} from "../../services/vendors-facade.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  vendors: Observable<Array<Vendor>>;

  constructor(private vendorsFacadeService: VendorsFacadeService) { }

  ngOnInit(): void {
    this.vendors = this.vendorsFacadeService.getVendors();
  }

}
