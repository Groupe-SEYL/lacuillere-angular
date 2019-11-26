import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Restaurant } from '../model/restaurant';
import {Menu} from '../model/menu';
import {MenuService} from '../service/menu.service';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})

export class RestaurantFormComponent {
  restaurant: Restaurant;
  Menus = new FormControl();

  ListMenu: Observable<Menu[]>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService,
    private menuService: MenuService) {
    this.ListMenu = menuService.findAll();
    this.restaurant = new Restaurant();
  }

  onSubmit() {
    this.restaurantService.save(this.restaurant).subscribe(result => this.gotoRestaurantList());
  }

  gotoRestaurantList() {
    this.router.navigate(['/restaurants']);
  }



}
