import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {DeleteRestaurantComponent} from './restaurant/delete-restaurant.component';

const routes: Routes = [
	{ path: 'restaurants', component: RestaurantListComponent },
	{ path: 'newrestaurant', component: RestaurantFormComponent},

  { path: 'restaurants', component: RestaurantComponent },
  { path: 'delete', component: DeleteRestaurantComponent }
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
