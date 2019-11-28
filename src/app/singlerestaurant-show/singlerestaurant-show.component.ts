import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../model/restaurant';
import {error} from "util";


@Component({
  selector: 'app-singlerestaurant-show',
  templateUrl: './singlerestaurant-show.component.html',
  styleUrls: ['./singlerestaurant-show.component.css']
})
export class SinglerestaurantShowComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router, private restaurantService: RestaurantService) {
  }
  restaurant: Restaurant;
  ngOnInit(): void {
    const id = this.route.snapshot.params.id;
    this.restaurantService.getSingleRestaurant(id).subscribe(
      restaurantGetted => {
        this.restaurant = restaurantGetted;
      }, err => {
        console.log(err);
    });
  }
}
