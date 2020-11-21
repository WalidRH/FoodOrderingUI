import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  DISPLAY_ORDERED_LIST = {
    submitted: 'SUBMIT',
    preReserved: 'PRES'
  };

  sectionToDisplay: string;

  constructor() { }

  ngOnInit(): void {
  }

  show( orderedListType: string ){
    this.sectionToDisplay = orderedListType;
  }


}
