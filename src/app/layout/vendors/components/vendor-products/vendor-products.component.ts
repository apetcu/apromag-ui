import { Component, OnInit } from '@angular/core';
import {CompaniesFacadeService} from "../../../companies/services/companies-facade.service";
import {ActivatedRoute} from "@angular/router";
import {Company} from "../../../companies/models/company";
import {Vendor} from "../../models/vendor";
import {VendorsFacadeService} from "../../services/vendors-facade.service";

@Component({
  selector: 'app-vendor-products',
  templateUrl: './vendor-products.component.html',
  styleUrls: ['./vendor-products.component.scss']
})
export class VendorProductsComponent implements OnInit {
  vendor: Vendor;

  constructor(private vendorsFacadeService: VendorsFacadeService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getCompanyDetails(parseInt(params.vendorId, 10));
    });
  }

  private getCompanyDetails(id: number) {
    this.vendorsFacadeService.getVendorById(id).subscribe(data => {
      this.vendor = data;
    });
  }

}
