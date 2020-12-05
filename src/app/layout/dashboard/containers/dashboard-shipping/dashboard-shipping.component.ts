import { Component, OnInit } from '@angular/core';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UserService } from '../../../user/services/user.service';
import { User } from '../../../user/models/user.model';

@Component({
  selector: 'app-dashboard-shipping',
  templateUrl: './dashboard-shipping.component.html',
  styleUrls: ['./dashboard-shipping.component.scss']
})
export class DashboardShippingComponent implements OnInit {
  loading: boolean = true;
  currentUser: User;
  shippingForm: FormGroup;
  shippingLocations: Array<ShippingLocation>;

  constructor(
    private formBuilder: FormBuilder,
    private shippingFacadeService: ShippingFacadeService,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  get shippingLocationsFormArray() {
    return this.shippingForm.get('locations') as FormArray;
  }

  get selectedShippingLocations() {
    return this.shippingForm.value.locations.map((v, i) => (v ? this.shippingLocations[i].id : null)).filter((v) => v !== null);
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
    this.shippingForm = this.formBuilder.group({
      shippingCost: new FormControl(this.currentUser.vendor.shippingCost, Validators.required),
      freeShippingOver: new FormControl(this.currentUser.vendor.freeShippingOver),
      shippingRemarks: new FormControl(this.currentUser.vendor.shippingRemarks),
      minOrder: new FormControl(this.currentUser.vendor.minOrder),
      locations: new FormArray([]),
      allShippingLocationsSelected: new FormControl(false)
    });
    this.loadShippingLocations();
  }

  onSubmit() {
    this.shippingFacadeService.saveShippingLocations(this.selectedShippingLocations, this.shippingForm.value).subscribe((data) => {
      this.alertService.show({
        position: 'top-end',
        icon: 'success',
        title: 'Setarile de livrare au fost actualizate',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  onSelectAll($event) {
    this.shippingForm.get('locations').setValue(Array.from({ length: this.shippingLocations.length }, (_) => $event.checked));
  }

  loadShippingLocations(): void {
    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      locations.forEach((entry, key) => {
        const isSelected = this.currentUser.vendor.shippingPreferences.some((preference) => preference.locationId === parseInt(entry.id));
        this.shippingLocationsFormArray.push(new FormControl(isSelected));
      });

      this.loading = false;
      this.shippingLocations = locations;
      this.shippingForm
        .get('allShippingLocationsSelected')
        .setValue(this.currentUser.vendor.shippingPreferences.length === locations.length);
    });
  }
}
