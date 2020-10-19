import { MenuData } from './../../../shared/model/MenuData.module';
import { PopularMenuInfo } from './../../../shared/model/PopularMenuInfo.module';
import { MenuHttpRequestService } from './../../../shared/service/http-services/menu-http-request.service';
import { Component, OnInit } from '@angular/core';
import { ContextManagerService } from '../../../shared/service/context-manager.service';

@Component({
  selector: 'app-popular-block',
  templateUrl: './popular-block.component.html',
  styleUrls: ['./popular-block.component.scss']
})
export class PopularBlockComponent implements OnInit {

  arrayPopularMenus: MenuData[] = [];
  constructor( private menuHttpRequests: MenuHttpRequestService, private contextManagerService: ContextManagerService ) { }

  ngOnInit(): void {
      this.menuHttpRequests.getPopularMenus()
      .subscribe(
        (response: PopularMenuInfo[]) => {
          response.forEach(element => {
            this.menuHttpRequests.getMenuInfo(element.menu).subscribe(
              responseData => {
                this.contextManagerService.imagePath(responseData);
                console.log(' ==>  ', responseData);
                this.arrayPopularMenus.push(responseData);
              });
            });
        }
     );

  }

}
