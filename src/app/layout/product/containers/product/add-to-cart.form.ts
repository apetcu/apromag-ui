import { FormControl, Validators } from '@angular/forms';
import { BaseForm } from '../../../../shared/models/base.form';

export class AddToCartForm extends BaseForm<{ quantity: string; salam: string }> {
  constructor() {
    super({
      quantity: new FormControl('1', [Validators.min(0.5), Validators.required])
    });
  }
}
