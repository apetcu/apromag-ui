import { BaseForm } from '../../../../shared/models/base.form';
import { FormControl, Validators } from '@angular/forms';
import { Product } from '../../../product/models/product';

export interface ModifyProductModel {
  name: string;
  category_id: string;
  price: string;
  unit: string;
  altUnit: string;
  description: string;
  stock: number;
  images: Array<File>;
}

export class ModifyProductForm extends BaseForm<ModifyProductModel> {
  constructor(product: Product) {
    super({
      name: new FormControl(product.name, [Validators.required]),
      category_id: new FormControl(product.category_id, [Validators.required]),
      price: new FormControl(product.price, [Validators.required, Validators.min(0)]),
      unit: new FormControl(product.unit || 'kg'),
      altUnit: new FormControl(product.unit),
      stock: new FormControl(product.stock),
      images: new FormControl(null),
      description: new FormControl(product.description, [Validators.required])
    });
  }
}
