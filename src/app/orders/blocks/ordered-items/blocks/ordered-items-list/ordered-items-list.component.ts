import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Order } from '../../../../../shared/model/order.module';

@Component({
  selector: 'app-ordered-items-list',
  templateUrl: './ordered-items-list.component.html',
  styleUrls: ['./ordered-items-list.component.scss']
})
export class OrderedItemsListComponent implements OnInit, AfterViewChecked  {
  constructor() { }

  // tslint:disable-next-line: no-input-rename
  @Input() orderedListData: {
    orderedListType: string,
    OrderedListArray: Order[]
   };

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ORDER-LIST-DATA ', this.orderedListData); // Angular will not call ngOnChanges lifeCycle because orderedListData is an object type so only if the reference of this object is changed, then this lifeCycle will be called
    console.log('changes ', changes);
  }

  ngAfterViewChecked(): void {
    console.log('ORDER-LIST-DATA ngAfterViewChecked ', this.orderedListData);
  }
}
