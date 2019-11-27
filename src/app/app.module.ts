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
import { MenuShowComponent } from './menu-show/menu-show.component';
import {RestaurantComponent} from './restaurant/restaurant.component';
import {RouterModule} from '@angular/router';
import {MenuService} from './service/menu.service';
import { MenuListComponent } from './menu-list/menu-list.component';
import {SinglerestaurantShowComponent} from './singlerestaurant-show/singlerestaurant-show.component';

@NgModule({
  declarations: [
    MenuShowComponent,
    AppComponent,
    RestaurantListComponent,
    RestaurantFormComponent,
    MenuFormComponent,
    MenuShowComponent,
    RestaurantComponent,
    MenuListComponent,
    SinglerestaurantShowComponent
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
