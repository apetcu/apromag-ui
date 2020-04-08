import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';

interface ModifyProductModel {
  name: string;
  category: string;
  price: string;
  unit: string;
  altUnit: string;
  description: string;
}

export class ModifyProductForm extends BaseForm<ModifyProductModel> {
  constructor() {
    super({
      name: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      unit: new FormControl('kg', [Validators.required]),
      altUnit: new FormControl(''),
      description: new FormControl('', [Validators.required])
    });
  }

  setAltUnit() {
    this.controls['unit'].clearValidators();
    this.controls['altUnit'].setValidators([Validators.required]);
  }
}
