import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserChangePasswordForm extends FormGroup {
  constructor() {
    super(
      {
        password: new FormControl('', [Validators.required]),
        confirmPassword: new FormControl('', [Validators.required])
      },
      (frm: FormGroup) => {
        return frm.get('password').value === frm.get('confirmPassword').value ? null : { mismatch: true };
      }
    );
  }
}
