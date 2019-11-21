import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurant: Restaurant = {
    id: 1,
    name: 'Chez Doudou',
    description: 'Pizzeria',
    menu: 'Entrée',
    address: '2, Rue d\'Antibes, 06630, Antibes',
    starsNumber: 3
  }

  constructor() { }

  ngOnInit() {
  }

}
