import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  @Input() notificationMessage: string;
  @Input() notificationStatus: string;

  constructor() { }

  ngOnInit(): void {
  }

}
