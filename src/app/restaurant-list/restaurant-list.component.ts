import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {RestaurantService} from '../service/restaurant.service';

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
    this.displayAllRestaurants();
  }

  deleteRestaurant(restaurant: Restaurant): void {
    console.log(restaurant.id);
    const id: number = restaurant.id;
    console.log(id);
    this.restaurantService.delete(id)
      .subscribe(success => {
        this.displayAllRestaurants();
      }, error => {
        console.log(error);
      });
  }

  displayAllRestaurants(): void {
    this.restaurantService.findAll().subscribe(data => {
      this.restaurants = data;
    });
  }


  displaySingleRestaurant(restaurant: Restaurant): void {
    console.log(restaurant.id);
    const id: number = restaurant.id;
    console.log(id);
    this.restaurantService.displayOneRestaurant(id)
      .subscribe();
  }
}
