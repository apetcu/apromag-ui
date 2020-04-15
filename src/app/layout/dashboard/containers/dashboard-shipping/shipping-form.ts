import { BaseForm } from '../../../../shared/models/base.form';
import { FormArray, FormControl, Validators } from '@angular/forms';
import { Product } from '../../../product/models/product';

export interface ModifyProductModel {
  shipToAddress: boolean;
  locations: string;
}

export class ShippingForm extends BaseForm<ModifyProductModel> {
  constructor() {
    super({
      shipToAddress: new FormControl(true),
      locations: new FormArray([])
    });
  }
}
