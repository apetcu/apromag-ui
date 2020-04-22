import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../models/currency';

@Pipe({
  name: 'aproCurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: number | string, currency: Currency): unknown {
    try {
      return currency ? (value as number).toFixed(2) + ' ' + currency.code : value;
    } catch (e) {
      return value;
    }
  }
}
