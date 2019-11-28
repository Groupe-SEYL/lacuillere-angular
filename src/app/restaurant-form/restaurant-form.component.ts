import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RestaurantService} from '../service/restaurant.service';

import {Menu} from '../model/menu';
import {MenuService} from '../service/menu.service';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable} from 'rxjs';
import {RestaurantSend} from '../model/restaurant-send';


@Component({
  selector: 'app-restaurant-form',
  templateUrl: './restaurant-form.component.html',
  styleUrls: ['./restaurant-form.component.css']
})

export class RestaurantFormComponent implements OnInit {
  form: FormGroup;
  restaurant: RestaurantSend;
  Menus = new FormControl();

  menuList: Observable<Menu[]>;

  constructor(
    private route: ActivatedRoute, private router: Router, private restaurantService: RestaurantService, private menuService: MenuService) {
    this.restaurant = new RestaurantSend();
    this.menuList = this.menuService.findAll();
  }


  ngOnInit() {
  }

  onSubmit() {
    this.restaurantService.save(this.restaurant).subscribe(result => this.gotoRestaurantList());
  }

  gotoRestaurantList() {
    this.router.navigate(['/restaurants']);
  }


}
