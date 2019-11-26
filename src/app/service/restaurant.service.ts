import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Restaurant } from '../model/restaurant';
import { Observable } from 'rxjs/Observable';
import { Menu} from '../model/menu';
import { isDevMode } from '@angular/core';

@Injectable()
export class RestaurantService {
  private restaurantsUrl: string;
  private menuUrl: string;

  constructor(private http: HttpClient) {
    this.restaurantsUrl = 'http://localhost:8080/restaurants';
    this.menuUrl = 'http://localhost:8080/menu';
  }

  public findAll(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(this.restaurantsUrl);
  }

  public getmenu(): Observable<Menu>{
    const urlmenu = '${this.menuUrl}/${5}';
    return this.http.get<Menu>(urlmenu);
  }

  public save(restaurant: Restaurant) {
    return this.http.post<Restaurant>(this.restaurantsUrl, restaurant);
  }


  /** DELETE: delete the restaurant from the server */
  public delete(id: number): Observable<{}> {
    // const url = 'http://localhost:8080/restaurants/2'; // DELETE api/heroes/42
    console.log(id);
    const st: string = '' + id;
    console.log(st);

    const url: string = this.restaurantsUrl + '/' + id;
    console.log(st);
    return this.http.delete(url);
  }


}
