import { AuthenticationService } from './../shared/service/http-services/authentication.service';
import { SharedUtilsService } from './../shared/service/shared-utils.service';
import { OrderHttpRequestService } from './../shared/service/http-services/order-http-request.service';
import { NgForm } from '@angular/forms';
import { MenuData } from './../shared/model/MenuData.module';
import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { MenuHttpRequestService } from '../shared/service/http-services/menu-http-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ContextManagerService } from '../shared/service/context-manager.service';
import { NotificationModule } from '../shared/model/notification.module';

@Component({
  selector: 'app-order-meal',
  templateUrl: './order-meal.component.html',
  styleUrls: ['./order-meal.component.scss']
})
export class OrderMealComponent implements OnInit {

  @ViewChild('orderForm') formOrder: NgForm;
  quantity: string;
  orderedMeal: MenuData;
  mealId: number;
  error = false;
  errorMessage: string;
  constructor(
    private menuRequestService: MenuHttpRequestService,
    private activeRoute: ActivatedRoute,
    private contextManagerService: ContextManagerService,
    private orderHttpRequestService: OrderHttpRequestService,
    private utilService: SharedUtilsService,
    private router: Router,
    private authenticationService: AuthenticationService
    ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      params => {
        this.quantity = '';
        window.scroll(0, 50);
        this.mealId = params.Meal_id;
        this.menuRequestService.getMenuInfo(params.Meal_id).subscribe(
          responseData => {
            this.error = false;
            this.orderedMeal = responseData;
            this.orderedMeal.image = this.contextManagerService.imagePath(responseData.ref);
            console.log('orderedMeal ', this.orderedMeal);
          },
          error => {
            this.error = true;
            this.errorMessage = error.error;
            console.log('ERROR:', error);
          }
        );
      }
      );
  }

  onSubmit(){
    console.log('FORM ', this.formOrder);
    if ( !this.formOrder.controls.quantity.dirty ){
      this.quantity = '1';
    }
    const orderBody = {
      quantity: this.quantity
    };
    this.orderHttpRequestService.setOrder(this.mealId, orderBody).subscribe(
      responseData => {
        this.utilService.notificationMessage.next(new NotificationModule('Your order is been submitted', 'SUCCESS'));
      },
      error => {
        console.log('ERROR RESPONSE', error);
        this.utilService.notificationMessage.next(new NotificationModule(error.error.message, 'FAILED'));
        this.authenticationService.logout();
        this.router.navigate(['/login']);
      }
    );
  }

}
