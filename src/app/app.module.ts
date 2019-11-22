import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestaurantService } from './service/restaurant.service';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';
import { RestaurantFormComponent } from './restaurant-form/restaurant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    RestaurantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
