import { Component, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';
import { Observable } from 'rxjs';
import { PaginatedResponse } from '../../../../shared/models/paginated-response';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  vendors: Array<Vendor>;

  constructor(private vendorsFacadeService: VendorsFacadeService) {}

  ngOnInit(): void {
    this.vendorsFacadeService.getVendors().subscribe((paginatedVendors) => {
      this.vendors = paginatedVendors.content;
    });
  }
}
