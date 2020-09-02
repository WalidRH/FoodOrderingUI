import { PopularMenuInfo } from './../../../shared/model/PopularMenuInfo.module';
import { OrderHttpRequestService } from './../../../shared/service/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  popularMenuArray: Subject<any> = new Subject();

  constructor( private orderHttpRequests: OrderHttpRequestService ) { }

  ngOnInit(): void {
      this.orderHttpRequests.getPopularMenus()
      .subscribe(
        (response: PopularMenuInfo[]) => {
          console.log( 'returned DATA ==> ', response );
          let arrayMenu: any[] = [];
          response.forEach(element => {
            console.log('element  ==>  ', element);
            this.orderHttpRequests.getMenuInfo(element.menu).subscribe(
              responseData => {
                console.log(' ==>  ', responseData);
                arrayMenu.push(responseData);
              });
            });
            this.popularMenuArray.next(arrayMenu);
        }
     );

      this.popularMenuArray.subscribe(
       listMenu => {
         console.log('LIST MENU ==> ', listMenu);
       }
     );

  }

}
