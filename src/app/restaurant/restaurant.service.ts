import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Restaurant} from '../models/restaurant.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class RestaurantService {

  constructor(private http:HttpClient) {}

  //private userUrl = 'http://localhost:4242/restaurant-portal/restaurant';
  private restaurantUrl = '/api';

  public getRestaurant() {
    return this.http.get<Restaurant[]>(this.restaurantUrl);
  }

  public deleteRestaurant(restaurant) {
    return this.http.delete(this.restaurantUrl + "/"+ restaurant.id);
  }

  // public createRestaurant(restaurant) {
  //   return this.http.post<Restaurant>(this.restaurantUrl, restaurant);
  // }



}
