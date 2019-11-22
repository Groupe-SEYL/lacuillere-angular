import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Restaurant} from '../models/restaurant.model';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styles: []
})

export class RestaurantComponent implements OnInit {

  restaurants: Restaurant[];
  constructor(private router: Router, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantService.getRestaurant()
      .subscribe( data => {
        this.restaurants = data;
      });
  };

  deleteResturant(restaurant: Restaurant): void {
    this.restaurantService.deleteRestaurant(restaurant)
      .subscribe( data => {
        this.restaurants = this.restaurants.filter(r => r !== restaurant);
      })
  };


}

