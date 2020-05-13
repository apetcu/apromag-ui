import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { Vendor } from '../../../vendor/models/vendor';

export class VendorDetailsForm extends BaseForm<{
  businessName: string;
  address: string;
  description: string;
  certificate: string;
  phone: string;
}> {
  constructor(vendor: Vendor) {
    super({
      businessName: new FormControl(vendor.businessName, [Validators.required]),
      address: new FormControl(vendor.address, [Validators.required]),
      phone: new FormControl(vendor.phone, [Validators.required]),
      certificate: new FormControl(null),
      description: new FormControl(vendor.description)
    });
  }
}
