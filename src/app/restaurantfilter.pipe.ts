import { Pipe, PipeTransform } from '@angular/core';
import {Restaurant} from './model/restaurant';

@Pipe({
  name: 'filter'
})
export class RestaurantFilterPipe implements PipeTransform {

  transform(restaurant: Restaurant[], searchText: string): Restaurant[] {

    if (!restaurant) {
      return [];
    }
    if (!searchText) {
      return restaurant;
    }
    searchText = searchText.toLocaleLowerCase();

    return restaurant.filter(it => {
      return it.name.toLocaleLowerCase().includes(searchText);
    });
  }

}
