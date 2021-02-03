import { Validators } from '@angular/forms';

export const RoPhoneValidator = Validators.pattern(
  '^(\\+4|)?(07[0-8]{1}[0-9]{1}|02[0-9]{2}|03[0-9]{2}){1}?(\\s|\\.|\\-)?([0-9]{3}(\\s|\\.|\\-|)){2}$'
);
