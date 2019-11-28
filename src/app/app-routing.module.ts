import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RestaurantListComponent} from './restaurant-list/restaurant-list.component';
import {RestaurantFormComponent} from './restaurant-form/restaurant-form.component';
import {MenuFormComponent} from './menu-form/menu-form.component';
import {MenuListComponent} from './menu-list/menu-list.component';
import {SinglerestaurantShowComponent} from './singlerestaurant-show/singlerestaurant-show.component';


const routes: Routes = [
  {path: '', component: RestaurantListComponent},
  {path: 'restaurants', component: RestaurantListComponent},
  {path: 'newrestaurant', component: RestaurantFormComponent},
  {path: 'menus', component: MenuListComponent},
  {path: 'newmenu', component: MenuFormComponent},
  {path: 'restaurants/:id', component: SinglerestaurantShowComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
