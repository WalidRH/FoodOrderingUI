import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  showOrderedItemDetails = true;

  constructor() { }

  ngOnInit(): void {
  }

  showOrderDetails(displayOrderedDetails: boolean){
    this.showOrderedItemDetails = displayOrderedDetails;
  }

}
