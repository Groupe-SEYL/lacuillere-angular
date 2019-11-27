import { Pipe, PipeTransform } from '@angular/core';
import {Restaurant} from './model/restaurant';

@Pipe({
  name: 'filter'
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(items: Restaurant[], searchText: string): Restaurant[] {

    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.name.includes(searchText);
    });
  }

}
