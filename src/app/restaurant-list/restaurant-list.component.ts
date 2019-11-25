import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  constructor(private restaurantService: RestaurantService) {
  }
  restaurants: Restaurant[];

  selectedRestaurant: Restaurant;

  ngOnInit() {
    this.restaurantService.findAll().subscribe(data => {
      this.restaurants = data;
    });
  }
    deleteResturant(restaurant: Restaurant): void {
      this.restaurantService.delete(restaurant.id)
        .subscribe(data => {
          this.restaurants = this.restaurants.filter(r => r !== restaurant);
        });
  }


}
