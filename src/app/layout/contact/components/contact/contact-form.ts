import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

export class ContactForm extends BaseForm<any> {
  constructor() {
    super({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      subject: new FormControl('', [Validators.required]),
      //  recaptchaReactive: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }
}
