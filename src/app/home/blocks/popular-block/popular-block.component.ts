import { MenuData } from './../../../shared/model/MenuData.module';
import { PopularMenuInfo } from './../../../shared/model/PopularMenuInfo.module';
import { OrderHttpRequestService } from './../../../shared/service/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { ContextManagerService } from '../../../shared/service/context-manager.service';

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  arrayMenu: MenuData[] = [];
  constructor( private orderHttpRequests: OrderHttpRequestService, private contextManagerService: ContextManagerService ) { }

  ngOnInit(): void {
      this.orderHttpRequests.getPopularMenus()
      .subscribe(
        (response: PopularMenuInfo[]) => {
          response.forEach(element => {
            this.orderHttpRequests.getMenuInfo(element.menu).subscribe(
              responseData => {
                responseData.image = this.contextManagerService.imagePath(responseData.ref);
                console.log(' ==>  ', responseData);
                this.arrayMenu.push(responseData);
              });
            });
        }
     );

  }

}
