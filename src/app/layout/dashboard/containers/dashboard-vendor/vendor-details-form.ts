import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

export class VendorDetailsForm extends BaseForm<{ businessName: string; address: string; description: string; phone: string }> {
  constructor() {
    super({
      businessName: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required])
    });
  }
}
