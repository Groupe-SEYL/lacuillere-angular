import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestaurantService } from './service/restaurant.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';
import { MenuFormComponent } from './menu-form/menu-form.component';
import {RouterModule} from '@angular/router';
import {MenuService} from './service/menu.service';
import { MenuListComponent } from './menu-list/menu-list.component';
import {SinglerestaurantShowComponent} from './singlerestaurant-show/singlerestaurant-show.component';
import { RestaurantFilterPipe } from './restaurantfilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
    MenuFormComponent,
    MenuListComponent,
    SinglerestaurantShowComponent,
    RestaurantFilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService, MenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
