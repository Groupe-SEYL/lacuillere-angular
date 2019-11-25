import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Restaurant} from '../model/restaurant';

import { RestaurantService } from '../service/restaurant.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: []
})


export class RestaurantComponent implements OnInit {
  restaurants: Restaurant[];
  constructor(private router: Router, private restaurantService: RestaurantService) {
  }

  ngOnInit() {
    this.restaurantService.findAll().subscribe();
    }
}

