import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../model/restaurant';
import { RestaurantService } from '../service/restaurant.service';
import { isDevMode } from '@angular/core';

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
  searchText: string;

  ngOnInit() {
    this.restaurantService.findAll().subscribe(data => {
      this.restaurants = data;
    });
  }

    deleteRestaurant(restaurant: Restaurant): void {
    console.log(restaurant.id);
    const id: number = restaurant.id;
    console.log(id);
    this.restaurantService.delete(id)
        .subscribe( );
    window.location.reload();
  }


  displaySingleRestaurant(restaurant: Restaurant): void {
    console.log(restaurant.id);
    const id: number = restaurant.id;
    console.log(id);
    this.restaurantService.displayOneRestaurant(id)
      .subscribe();
  }


}
