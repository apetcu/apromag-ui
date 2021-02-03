import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { User } from '../../../user/models/user.model';
import { ShippingLocation } from '../../../../shared/models/shipping-location';
import { RoPhoneValidator } from '../../../../shared/validators/ro-phone.validator';

export interface CartSummaryFields {
  location: number;
  email: string;
  phone: string;
  remarks: string;
  shippingAddress: string;
  fullName: string;
  terms: string;
}

export class CartSummaryForm extends BaseForm<CartSummaryFields> {
  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.minLength(5), RoPhoneValidator]),
      location: new FormControl('', [Validators.required]),
      shippingAddress: new FormControl('', [Validators.required]),
      remarks: new FormControl(''),
      fullName: new FormControl('', [Validators.required]),
      terms: new FormControl('', [Validators.requiredTrue])
    });
  }

  autoFillForm(user: User, shippingLocation?: ShippingLocation) {
    this.patchValue({
      email: user.email,
      phone: user.phone,
      fullName: user.fullName,
      shippingAddress: user.address
    });
    if (shippingLocation) {
      this.patchValue({
        location: shippingLocation.id
      });
    }
  }
}
