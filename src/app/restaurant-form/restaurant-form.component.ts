import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
import {Menu} from '../model/menu';
import {MenuService} from '../service/menu.service';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})

export class RestaurantFormComponent {
  restaurant: Restaurant;
  Menus = new FormControl();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService) {
    this.restaurant = new Restaurant();
  }

  onSubmit() {
    this.restaurantService.save(this.restaurant).subscribe(result => this.gotoRestaurantList());
  }

  gotoRestaurantList(){
    this.router.navigate(['/restaurants']);
  }



}
