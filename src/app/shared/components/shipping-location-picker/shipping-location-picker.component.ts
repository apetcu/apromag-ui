import { Component, OnInit } from '@angular/core';
import { ShippingService } from '../../services/shipping/shipping.service';
import { ShippingLocation } from '../../models/shipping-location';
import { LocationPickerService } from '../location-picker/services/location-picker.service';

@Component({
  selector: 'app-shipping-location-picker',
  templateUrl: './shipping-location-picker.component.html',
  styleUrls: ['./shipping-location-picker.component.scss']
})
export class ShippingLocationPickerComponent implements OnInit {
  currentLocation: ShippingLocation;
  constructor(private shippingService: ShippingService, private locationPicker: LocationPickerService) {}

  onChangeLocation() {
    this.locationPicker.showLocationPicker();
  }
  ngOnInit(): void {
    this.listenForLocationChange();
  }

  removeShippingLocation(): void {
    this.shippingService.resetShippingLocation();
  }

  listenForLocationChange() {
    this.shippingService.onShippingLocationChange().subscribe((location) => {
      this.currentLocation = location;
    });
  }
}
