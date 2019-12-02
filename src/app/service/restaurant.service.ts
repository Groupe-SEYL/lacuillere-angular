import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Restaurant} from '../model/restaurant';
import {Observable} from 'rxjs/Observable';
import {RestaurantSend} from '../model/restaurant-send';
import {Menu} from '../model/menu';


@Injectable()
export class RestaurantService {
  private restaurantsUrl: string;
  private menuUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantsUrl = 'http://localhost:8080/api/restaurants';
    this.menuUrl = 'http://localhost:8080/api/restaurants/id';
  }

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl);
  }

  public save(restaurantSend: RestaurantSend) {
    return this.http.post<RestaurantSend>(this.restaurantsUrl, restaurantSend);
  }


  /** DELETE: delete the restaurant from the server */
  public delete(id: number): Observable<{}> {
    return this.http.delete(this.restaurantsUrl + '/' + id);
  }

  public getSingleRestaurant(id: number): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.restaurantsUrl + '/' + id);
  }


}
