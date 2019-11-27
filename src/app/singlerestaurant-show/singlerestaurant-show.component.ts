import {Component, OnInit} from '@angular/core';
import {Restaurant} from '../model/restaurant';
import {RestaurantService} from '../service/restaurant.service';

@Component({
  selector: 'app-singlerestaurant-show',
  templateUrl: './singlerestaurant-show.component.html',
  styleUrls: ['./singlerestaurant-show.component.css']
})
export class SinglerestaurantShowComponent implements OnInit {
  restaurants: {};

  constructor(private restaurantService: RestaurantService ) {}

  ngOnInit() {
    this.restaurantService.displaySingleRestaurant(20)
      .subscribe(data => {
        this.restaurants = data; });
  }

}
