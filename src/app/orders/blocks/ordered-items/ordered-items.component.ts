import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  submittedOrders = false;
  preReservedOrders = false;

  constructor() { }

  ngOnInit(): void {
  }

}
