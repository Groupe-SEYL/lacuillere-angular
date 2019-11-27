import {Component, OnInit} from '@angular/core';
import {RestaurantService} from '../service/restaurant.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Restaurant} from '../model/restaurant';


@Component({
  selector: 'app-singlerestaurant-show',
  templateUrl: './singlerestaurant-show.component.html',
  styleUrls: ['./singlerestaurant-show.component.css']
})
export class SinglerestaurantShowComponent implements OnInit {
  constructor(private route: ActivatedRoute,
              private router: Router, private restaurantService: RestaurantService) {
    this.restaurants = new Restaurant();
  }

  restaurants: Restaurant;
  onSubmit(restaurants) {
    this.restaurantService.displayOneRestaurant(restaurants)
      .subscribe(result => this.goToRestaurant());
  }

  goToRestaurant() {
    this.router.navigate(['/restaurants/{id}']);
  }

  ngOnInit(): void {
  }


}
