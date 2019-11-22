import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {RestaurantComponent} from './restaurant/restaurant.component';
import {DeleteRestaurantComponent} from './restaurant/delete-restaurant.component';

const routes: Routes = [
  { path: 'restaurants', component: RestaurantComponent },
  { path: 'delete', component: DeleteRestaurantComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
