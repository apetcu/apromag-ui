import { Pipe, PipeTransform } from '@angular/core';
import { Currency } from '../../models/currency';

@Pipe({
  name: 'aproCurrency'
})
export class CurrencyPipe implements PipeTransform {
  transform(value: any, currency: Currency): unknown {
    try {
      const parsed = parseFloat(value).toFixed(2);
      return currency ? (!isNaN(parseFloat(value)) ? parsed : '-') + ' ' + currency.code : value;
    } catch (e) {
      console.log(e);
      return value;
    }
  }
}
