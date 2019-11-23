import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import {MenuFormComponent} from './menu-form/menu-form.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantListComponent },
  { path: 'newrestaurant', component: RestaurantFormComponent},
  { path: 'newmenu', component: MenuFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
