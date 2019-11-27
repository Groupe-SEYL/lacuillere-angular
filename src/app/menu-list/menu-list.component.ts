import {Component, OnInit} from '@angular/core';
import {Menu} from '../model/menu';
import {MenuService} from '../service/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {
  menus: Menu[];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    this.menuService.findAll().subscribe(data => {this.menus = data; });
  }

}
