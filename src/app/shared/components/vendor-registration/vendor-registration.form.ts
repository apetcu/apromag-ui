import { FormControl, Validators } from '@angular/forms';
import { BaseForm } from '../../models/base.form';

export class VendorRegistrationForm extends BaseForm<any> {
  constructor() {
    super({
      businessName: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      role: new FormControl('VENDOR', [Validators.required])
    });
  }
}
