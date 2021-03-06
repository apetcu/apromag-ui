import { AbstractControl, FormGroup } from '@angular/forms';

export abstract class BaseForm<T> extends FormGroup {
  protected constructor(form: BaseFormModel<T>, validators?) {
    super(form, validators);
  }
}

export type BaseFormModel<T> = { [key in keyof T]?: AbstractControl };
