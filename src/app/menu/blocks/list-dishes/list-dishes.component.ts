import { element } from 'protractor';
import { MenuData } from './../../../shared/model/MenuData.module';
import { OrderHttpRequestService } from './../../../shared/service/order-http-request.service';
import { Component, OnInit } from '@angular/core';
import { ContextManagerService } from '../../../shared/service/context-manager.service';

@Component({
  selector: 'app-list-dishes',
  templateUrl: './list-dishes.component.html',
  styleUrls: ['./list-dishes.component.scss']
})
export class ListDishesComponent implements OnInit {

  listDishes: MenuData[] = new Array<MenuData>();
  constructor( private orderHttpRequestService: OrderHttpRequestService, private contextManagerService: ContextManagerService ) { }

  ngOnInit(): void {
    this.orderHttpRequestService.getAllMenu().subscribe(
      responseData => {
        responseData.forEach(element => {
          element.image = this.contextManagerService.imagePath(element.ref);
          this.listDishes.push(element);
        });
        console.log(' --> ', this.listDishes);
      }
    )
  }

}
