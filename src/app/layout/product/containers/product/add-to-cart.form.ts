import { FormControl, FormGroup, Validators } from '@angular/forms';

export class AddToCartForm extends FormGroup {
  constructor() {
    super({
      quantity: new FormControl('1', [Validators.min(0.5), Validators.required])
    });
  }
}
