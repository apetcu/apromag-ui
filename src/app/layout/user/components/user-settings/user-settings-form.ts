import { BaseForm } from '../../../../shared/models/base.form';
import { User } from '../../models/user.model';
import { FormControl, Validators } from '@angular/forms';
import { Vendor } from '../../../vendor/models/vendor';
import { RoPhoneValidator } from '../../../../shared/validators/ro-phone.validator';

export class UserSettingsForm extends BaseForm<User> {
  constructor(private user: User) {
    super({
      firstName: new FormControl(user.firstName, Validators.required),
      lastName: new FormControl(user.lastName, Validators.required),
      email: new FormControl(user.email, Validators.required),
      phone: new FormControl(user.phone, [Validators.required, RoPhoneValidator]),
      address: new FormControl(user.address, [Validators.required, Validators.minLength(3)]),
      profilePicture: new FormControl(user.profilePicture),
      vendor: user.isUserOfTypeVendor() ? new VendorSettingsForm(user.vendor) : new FormControl(null)
    });
  }

  isVendor(): boolean {
    return this.user && this.user.isUserOfTypeVendor();
  }

  getVendorForm(): VendorSettingsForm {
    return this.get('vendor') as VendorSettingsForm;
  }
}

export class VendorSettingsForm extends BaseForm<Vendor> {
  constructor(vendor: Vendor) {
    super({
      businessName: new FormControl(vendor.businessName, Validators.required),
      address: new FormControl(vendor.address, Validators.required),
      urlSlug: new FormControl(vendor.urlSlug)
    });
  }
}
