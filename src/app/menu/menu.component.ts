import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu: Menu = {
    id: 1,
    name: 'Salade de fruits',
    description: 'Dessert composé de cerises, pommes et poires'
  };

  constructor() { }

  ngOnInit() {
  }

}
