import { Component, OnInit } from '@angular/core';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UserService } from '../../../user/services/user.service';
import { VendorShippingPreference } from '../../../vendor/models/vendor';
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

  get f() {
    return this.shippingForm && this.shippingForm.controls;
  }

  get locationsFormArray(): FormArray {
    return this.f && <FormArray>this.f.locationsFormArray;
  }

  get locationsFormArrayaySelectedIds(): string[] {
    return this.shippingLocations
      .filter((cat, catIdx) => this.locationsFormArray.controls.some((control, controlIdx) => catIdx === controlIdx && control.value))
      .map((cat) => cat.id);
  }

  ngOnInit(): void {
    this.currentUser = this.userService.getUser();
    this.shippingForm = this.formBuilder.group({
      shippingCost: new FormControl(this.currentUser.vendor.shippingCost, Validators.required),
      freeShippingOver: new FormControl(this.currentUser.vendor.freeShippingOver),
      shippingRemarks: new FormControl(this.currentUser.vendor.shippingRemarks),
      minOrder: new FormControl(this.currentUser.vendor.minOrder)
    });
    this.loadShippingLocations();
  }

  locationFormArray(locations: Array<ShippingLocation>, selectedLocations: Array<VendorShippingPreference> = []): FormArray {
    const controlArr = locations.map((category) => {
      let isSelected = selectedLocations.some((preference) => preference.locationId === parseInt(category.id, 10));
      return this.formBuilder.control(isSelected);
    });
    return this.formBuilder.array(controlArr);
  }

  onSubmit() {
    this.shippingFacadeService.saveShippingLocations(this.locationsFormArrayaySelectedIds, this.shippingForm.value).subscribe((data) => {
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
    this.shippingForm.get('locationsFormArray').setValue(Array.from({ length: this.shippingLocations.length }, (_) => $event.checked));
  }

  loadShippingLocations(): void {
    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      this.loading = false;
      this.shippingLocations = locations;
      this.shippingForm.addControl('locationsFormArray', this.locationFormArray(locations, this.currentUser.vendor.shippingPreferences));
    });
  }
}
