import { PopularMenuInfo } from './../../../shared/model/PopularMenuInfo.module';
import { OrderHttpRequestService } from './../../../shared/service/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  popularMenuArray: Subject<PopularMenuInfo[]> = new Subject();

  constructor( private orderHttpRequests: OrderHttpRequestService ) { }

  ngOnInit(): void {
      this.orderHttpRequests.getPopularMenus().subscribe(
        (response: PopularMenuInfo[]) => {
          console.log( 'returned DATA ==> ', response );
          this.popularMenuArray.next(response);
        }
     );
     
     this.popularMenuArray.subscribe(
       (responseArray: PopularMenuInfo[]) => {
         console.log('ARRAY response => ', responseArray);
       }
     )

  }

}
