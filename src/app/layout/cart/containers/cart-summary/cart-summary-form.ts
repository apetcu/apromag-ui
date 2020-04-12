import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

export interface CartSummaryFields {
  location: number;
  email: string;
  phone: string;
  remarks: string;
  address: string;
}

export class CartSummaryForm extends BaseForm<CartSummaryFields> {
  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      remarks: new FormControl('')
    });
  }
}
