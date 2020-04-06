import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit {
  vendors: Array<Vendor>;

  constructor(private vendorsFacadeService: VendorsFacadeService) {}

  ngOnInit(): void {
    this.vendorsFacadeService.getVendors().subscribe((paginatedVendors) => {
      this.vendors = paginatedVendors.content;
    });
  }
}
