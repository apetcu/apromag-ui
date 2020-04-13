import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../../services/shipping/shipping.service';
import { ShippingLocation } from '../../models/location';

@Component({
  selector: 'app-shipping-location-picker',
  templateUrl: './shipping-location-picker.component.html',
  styleUrls: ['./shipping-location-picker.component.scss']
})
export class ShippingLocationPickerComponent implements OnInit {
  currentLocation: ShippingLocation;
  constructor(private shippingService: ShippingService) {}

  ngOnInit(): void {
    this.listenForLocationChange();
  }

  listenForLocationChange() {
    this.shippingService.onShippingLocationChange().subscribe((location) => {
      this.currentLocation = location;
    });
  }
}
