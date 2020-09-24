import { NotificationModule } from './../model/notification.module';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedUtilsService {
  constructor() { }

  notificationMessage = new Subject<NotificationModule>();

}
