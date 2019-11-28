import { Component } from '@angular/core';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {MenuService} from '../service/menu.service';
import {Menu} from '../model/menu';

@Component({
  selector: 'app-menu-form',
  templateUrl: './menu-form.component.html',
  styleUrls: ['./menu-form.component.css']
})
export class MenuFormComponent {
  menu: Menu;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private menuService: MenuService) {
    this.menu = new Menu();
  }

  onSubmit() {
    this.menuService.save(this.menu).subscribe(result => this.gotoMenuList());
  }

  gotoMenuList() {
    this.router.navigate(['/menus']);
  }

}
