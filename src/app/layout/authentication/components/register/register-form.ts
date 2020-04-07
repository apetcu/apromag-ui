import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { UserRoles } from '../../../user/models/user-roles';

interface Register {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address: string;
  businessName: string;
  role: UserRoles;
}

export class RegisterForm extends BaseForm<Register> {
  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      address: new FormControl('', []),
      businessName: new FormControl('', []),
      role: new FormControl(UserRoles.CUSTOMER, [Validators.required])
    });
  }
}
