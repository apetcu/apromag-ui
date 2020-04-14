import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../user/models/user.model';

export interface CartSummaryFields {
  location: number;
  email: string;
  phone: string;
  remarks: string;
  shippingAddress: string;
  fullName: string;
}

export class CartSummaryForm extends BaseForm<CartSummaryFields> {
  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required]),
      location: new FormControl('', [Validators.required]),
      shippingAddress: new FormControl('', [Validators.required]),
      remarks: new FormControl(''),
      fullName: new FormControl('', [Validators.required])
    });
  }

  autoFillUser(user: User) {
    this.patchValue({
      email: user.email,
      phone: user.phone,
      fullName: user.fullName,
      shippingAddress: user.address
    });
  }
}
