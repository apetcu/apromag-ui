import { Component, OnDestroy, OnInit } from '@angular/core';
import { Vendor } from '../../models/vendor';
import { VendorsFacadeService } from '../../services/vendors-facade.service';
import { ShippingService } from '../../../../shared/services/shipping/shipping.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss']
})
export class VendorListComponent implements OnInit, OnDestroy {
  shippingLocationSubscription: Subscription;
  shippingLocation: ShippingLocation;
  vendors: Array<Vendor>;

  constructor(private vendorsFacadeService: VendorsFacadeService, private shippingService: ShippingService) {}

  ngOnInit(): void {
    this.getProducts();
    this.initLocationListener();
  }

  getProducts(): void {
    this.vendorsFacadeService.getVendors().subscribe((paginatedVendors) => {
      this.vendors = paginatedVendors.data;
    });
  }

  initLocationListener() {
    this.shippingLocationSubscription = this.shippingService.onShippingLocationChange().subscribe((location) => {
      this.shippingLocation = location;
    });
  }

  ngOnDestroy(): void {
    this.shippingLocationSubscription && this.shippingLocationSubscription.unsubscribe();
  }
}
