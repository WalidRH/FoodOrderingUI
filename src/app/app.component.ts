import { NotificationComponent } from './shared/components/notification/notification.component';
import { SharedUtilsService } from './shared/service/shared-utils.service';
import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  OnChanges,
  OnInit,
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'FoodOrderingUI';

  @ViewChild('notification', { read: ViewContainerRef })
  notification: ViewContainerRef;

  // create the component factory
  componentFactory = this.componentFactoryResolver.resolveComponentFactory( NotificationComponent );

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private sharedUtilsService: SharedUtilsService
  ) {}

  ngOnInit() {
    console.log('CHANGING .... ');
    this.sharedUtilsService.notificationMessage.subscribe((notifMessage) => {
      console.log(' notifMessage SUBSCRIBING .... ');
      if (!!notifMessage) {
        console.log('notification message');
        // add the component to the view
        const componentRef = this.notification.createComponent(
          this.componentFactory
        );

        // pass some data to the component
        componentRef.instance.notificationMessage = notifMessage.message;
        componentRef.instance.notificationStatus = notifMessage.status;
        const timerclose = timer(5000);
        timerclose.subscribe(() => {
          this.sharedUtilsService.notificationMessage.next(null);
          this.sharedUtilsService.notificationMessage.unsubscribe();
          this.notification.clear();
        });
      }
    });
  }
}
