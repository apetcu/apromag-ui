import { Component, OnInit } from '@angular/core';
import { ShippingFacadeService } from '../../../../shared/services/shipping/shipping-facade.service';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '../../../../shared/services/alert/alert.service';
import { UserService } from '../../../user/services/user.service';
import { VendorShippingPreference } from '../../../vendor/models/vendor';

@Component({
  selector: 'app-dashboard-shipping',
  templateUrl: './dashboard-shipping.component.html',
  styleUrls: ['./dashboard-shipping.component.scss']
})
export class DashboardShippingComponent implements OnInit {
  form: FormGroup;
  shippingLocations: Array<ShippingLocation>;

  constructor(
    private formBuilder: FormBuilder,
    private shippingFacadeService: ShippingFacadeService,
    private alertService: AlertService,
    private userService: UserService
  ) {}

  get f() {
    return this.form && this.form.controls;
  }

  get categoriesFormArr(): FormArray {
    return this.f && <FormArray>this.f.categoriesFormArr;
  }

  get categoriesFormArraySelectedIds(): string[] {
    return this.shippingLocations
      .filter((cat, catIdx) => this.categoriesFormArr.controls.some((control, controlIdx) => catIdx === controlIdx && control.value))
      .map((cat) => cat.id);
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({});
    this.loadShippingLocations();
  }

  buildCategoryFormArr(locations: Array<ShippingLocation>, selectedLocations: Array<VendorShippingPreference> = []): FormArray {
    const controlArr = locations.map((category) => {
      let isSelected = selectedLocations.some((preference) => preference.locationId === parseInt(category.id, 10));
      return this.formBuilder.control(isSelected);
    });
    return this.formBuilder.array(controlArr);
  }

  onSubmit() {
    console.log({ arrVal: this.categoriesFormArraySelectedIds }, this.form.value, 2);
    this.shippingFacadeService.saveShippingLocations(this.categoriesFormArraySelectedIds).subscribe((data) => {
      this.alertService.show({
        position: 'top-end',
        icon: 'success',
        title: 'Setarile de livrare au fost actualizate',
        showConfirmButton: false,
        timer: 1500
      });
    });
  }

  loadShippingLocations(): void {
    this.shippingFacadeService.getShippingLocations('').subscribe((locations) => {
      this.shippingLocations = locations;
      this.form.addControl(
        'categoriesFormArr',
        this.buildCategoryFormArr(locations, this.userService.getUser().vendor.shippingPreferenceList)
      );
    });
  }
}
