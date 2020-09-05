import { MenuData } from './../model/MenuData.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PopularMenuInfo } from '../model/PopularMenuInfo.module';

@Injectable({
  providedIn: 'root'
})
export class OrderHttpRequestService {

  constructor( private http: HttpClient ) { }

  getPopularMenus(): any {
    return this.http.get<PopularMenuInfo[]>(
      'http://localhost:8080/api/order/OrderedMenus/popular'
    );
  }

  getMenuInfo(menuId: number){
    let queryParam = new HttpParams();
    queryParam = queryParam.set('id', '' + menuId);
    return this.http.get<MenuData>(
      'http://localhost:8080/api/menu/find',
      {
        params: queryParam
      }
    );
  }
}
