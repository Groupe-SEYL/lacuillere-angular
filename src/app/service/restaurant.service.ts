import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RestaurantService {
  private restaurantsUrl: string;
  private newRestaurantURL: string;

  constructor(private http: HttpClient) { 
  		this.restaurantsUrl = 'http://localhost:8080/restaurants';
  		this.newRestaurantURL = 'http://localhost:8080/newrestaurant';
  }

  public findAll(): Observable<Restaurant[]> {
  	return this.http.get<Restaurant[]>(this.restaurantsUrl);
  }

  public save(restaurant: Restaurant) {
  	return this.http.post<Restaurant>(this.newRestaurantURL, restaurant);
  }


  /** DELETE: delete the restaurant from the server */
 public delete(id: number): Observable<{}> {
  const url = '${this.restaurantsUrl}/${id}'; // DELETE api/heroes/42
  return this.http.delete(url);
}


}
