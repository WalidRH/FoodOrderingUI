import { MenuData } from './../../model/MenuData.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PopularMenuInfo } from '../../model/PopularMenuInfo.module';
import { HttpManagerModule } from '../../model/http-manager.module';

@Injectable({
  providedIn: 'root'
})
export class MenuHttpRequestService {

  constructor( private http: HttpClient ) { }

  getPopularMenus(): any {
    return this.http.get<PopularMenuInfo[]>(
      HttpManagerModule.httpHost + '/order/OrderedMenus/popular'
    );
  }

  // tslint:disable-next-line: typedef
  getMenuInfo(menuId: number){
    let queryParam = new HttpParams();
    queryParam = queryParam.set('id', '' + menuId);
    return this.http.get<MenuData>(
      HttpManagerModule.httpHost + '/menu/find',
      {
        params: queryParam
      }
    );
  }

  // tslint:disable-next-line: typedef
  getAllMenu(){
    return this.http.get<MenuData[]>(
      HttpManagerModule.httpHost + '/menu/findAll'
    );
  }

  getListMenu(paramKey: string, paramValue: string){
    let queryParam = new HttpParams();
    queryParam = queryParam.set('' + paramKey, '' + paramValue);
    return this.http.get<MenuData[]>(
      HttpManagerModule.httpHost + '/menu/find',
      {
        params: queryParam
      }
    );
  }


}
