import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../../../product/models/product';

export interface ModifyProductModel {
  status: string;
  remarks: string;
}

export class OrderStatusForm extends BaseForm<ModifyProductModel> {
  constructor(status, remarks) {
    super({
      status: new FormControl(status, [Validators.required]),
      remarks: new FormControl(remarks, [Validators.required])
    });
  }
}
