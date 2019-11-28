import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Menu } from '../model/menu';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class MenuService {
  private menusUrl: string;
  private newMenuUrl: string;

  constructor(private http: HttpClient) {
    this.menusUrl = 'http://localhost:8080/menu';
    this.newMenuUrl = 'http://localhost:8080/newmenu';
  }

  public findAll(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.menusUrl);
  }

  public getById(id: number): Observable<Menu> {
    const url = '${this.menuUrl}/${id}';
    return this.http.get<Menu>(this.menusUrl);
  }

  public save(menu: Menu) {
    return this.http.post<Menu>(this.menusUrl, menu);
  }
}
