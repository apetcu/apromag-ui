import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

export class VendorProfilePictureForm extends BaseForm<{ profilePicture: string }> {
  constructor() {
    super({
      profilePicture: new FormControl(null, [Validators.required])
    });
  }
}
