import { MenuData } from './../../../shared/model/MenuData.module';
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

  arrayMenu: MenuData[] = [];
  constructor( private orderHttpRequests: OrderHttpRequestService ) { }

  ngOnInit(): void {
      this.orderHttpRequests.getPopularMenus()
      .subscribe(
        (response: PopularMenuInfo[]) => {
          response.forEach(element => {
            this.orderHttpRequests.getMenuInfo(element.menu).subscribe(
              responseData => {
                responseData.image = '../../../../assets/images/categories/' + responseData.categorie + '/' + responseData.ref + '.jpg',
                console.log(' ==>  ', responseData);
                this.arrayMenu.push(responseData);
              });
            });
        }
     );

  }

}
