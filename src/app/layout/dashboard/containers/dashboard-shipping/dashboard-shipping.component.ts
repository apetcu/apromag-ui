import { Component, OnInit } from '@angular/core';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { ShippingForm } from './shipping-form';

@Component({
  selector: 'app-dashboard-shipping',
  templateUrl: './dashboard-shipping.component.html',
  styleUrls: ['./dashboard-shipping.component.scss']
})
export class DashboardShippingComponent implements OnInit {
  shippingForm: ShippingForm = new ShippingForm();
  shippingLocations: Array<ShippingLocation>;
  constructor(private shippingFacadeService: ShippingFacadeService) {}

  ngOnInit(): void {
    this.loadShippingLocations();
  }

  loadShippingLocations(): void {
    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      this.shippingLocations = locations;
    });
  }
}
