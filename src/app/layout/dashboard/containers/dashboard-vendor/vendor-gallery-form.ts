import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

export class VendorGalleryForm extends BaseForm<{ images: string }> {
  constructor() {
    super({
      images: new FormControl(null, [Validators.required])
    });
  }
}
