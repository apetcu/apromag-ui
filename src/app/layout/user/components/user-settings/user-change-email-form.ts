import { FormControl, FormGroup, Validators } from '@angular/forms';

export class UserChangeEmailForm extends FormGroup {
  constructor() {
    super(
      {
        email: new FormControl('', [Validators.email, Validators.required]),
        confirmEmail: new FormControl('', [Validators.email, Validators.required]),
        currentPassword: new FormControl('', [Validators.required])
      },
      (frm: FormGroup) => {
        return frm.get('email').value === frm.get('confirmEmail').value ? null : { mismatch: true };
      }
    );
  }
}
