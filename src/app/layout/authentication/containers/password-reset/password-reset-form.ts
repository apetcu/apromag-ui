import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { UserRoles } from '../../../user/models/user-roles';

interface Register {
  email: string;
}

export class PasswordResetForm extends BaseForm<Register> {
  constructor() {
    super({
      email: new FormControl('', [Validators.email, Validators.required])
    });
  }
}
