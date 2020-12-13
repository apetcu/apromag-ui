import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationPickerService {
  locationPickerDisplayed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  showLocationPicker() {
    this.locationPickerDisplayed.next(true);
  }

  hideLocationPicker() {
    this.locationPickerDisplayed.next(false);
  }
}
