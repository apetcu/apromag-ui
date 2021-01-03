import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LocationPickerService } from './services/location-picker.service';
import { Observable, Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShippingFacadeService } from '../../services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../models/shipping-location';
import { ShippingService } from '../../services/shipping/shipping.service';

@Component({
  selector: 'app-location-picker',
  templateUrl: './location-picker.component.html',
  styleUrls: ['./location-picker.component.scss']
})
export class LocationPickerComponent implements OnInit {
  locationPickerOpen: Observable<boolean>;
  shippingLocations: Array<ShippingLocation>;
  searchForm: FormGroup = new FormGroup({
    query: new FormControl('', [Validators.required])
  });
  locationSubscription: Subscription;

  @ViewChild('input')
  input: ElementRef;

  constructor(
    private locationPickerService: LocationPickerService,
    private router: Router,
    private shippingFacadeService: ShippingFacadeService,
    private shippingService: ShippingService
  ) {}

  ngOnInit(): void {
    this.locationPickerOpen = this.locationPickerService.locationPickerDisplayed.asObservable();
    this.locationPickerService.locationPickerDisplayed.subscribe((displayed) => {
      if (!displayed) {
        this.searchForm.reset();
      } else {
        this.input.nativeElement.focus();
      }
    });
    this.filterLocations();
    this.searchForm.controls.query.valueChanges.subscribe((value) => {
      this.filterLocations(value || '');
    });
  }

  hideSearch(): void {
    this.locationPickerService.hideLocationPicker();
    this.searchForm.reset();
  }

  filterLocations(query = '') {
    this.locationSubscription && this.locationSubscription.unsubscribe();
    this.locationSubscription = this.shippingFacadeService.getShippingLocations(query).subscribe((locations) => {
      this.shippingLocations = locations;
    });
  }

  onSelect(shippingLocation?: ShippingLocation) {
    this.hideSearch();
    if (shippingLocation) {
      this.shippingService.setShippingLocation(shippingLocation);
    } else {
      this.shippingService.resetShippingLocation();
    }
  }

  onSearch(event: Event): void {
    event.preventDefault();
  }
}
