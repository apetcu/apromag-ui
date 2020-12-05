import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: Object, key: string): any {
    if (!items || !filter) {
      return items;
    }
    return items.filter((item) => item[key].indexOf(filter[key]) !== -1);
  }
}
