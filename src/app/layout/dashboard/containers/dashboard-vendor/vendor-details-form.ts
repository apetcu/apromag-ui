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
      phone: new FormControl(vendor.phone, [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^(\\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\\s|\\.|\\-)?([0-9]{3}(\\s|\\.|\\-|)){2}$')
      ]),
      certificate: new FormControl(null),
      description: new FormControl(vendor.description)
    });
  }
}
