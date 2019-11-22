import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Restaurant} from '../models/restaurant.model';
import {RestaurantService} from './restaurant.service';

@Component({
  templateUrl: './delete-restaurant.component.html'
})
export class DeleteRestaurantComponent {

  restaurant: Restaurant = new Restaurant();

  constructor(private router: Router, private restaurantService: RestaurantService) {

  }

  deleteRestaurant(): void {
    this.restaurantService.deleteRestaurant(this.restaurant)
      .subscribe(data => alert("Restaurant deleted successfully."));

  };

}
