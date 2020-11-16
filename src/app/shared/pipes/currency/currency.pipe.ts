import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../models/currency';

@Pipe({
  name: 'aproCurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, currency: Currency): unknown {
    try {
      return currency ? parseFloat(value).toFixed(2) + ' ' + currency.code : value;
    } catch (e) {
      console.log(e);
      return value;
    }
  }
}
