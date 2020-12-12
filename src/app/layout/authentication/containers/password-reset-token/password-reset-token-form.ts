import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { UserRoles } from '../../../user/models/user-roles';

interface PasswordResetToken {
  password: string;
  confirmPassword: string;
}

export class PasswordResetTokenForm extends BaseForm<PasswordResetToken> {
  constructor() {
    super({
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
}
