import { Component, OnInit, Input, OnChanges, SimpleChanges, AfterViewChecked, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { Order } from '../../../../../shared/model/order.module';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ordered-items-list',
  templateUrl: './ordered-items-list.component.html',
  styleUrls: ['./ordered-items-list.component.scss']
})
export class OrderedItemsListComponent implements OnInit, AfterViewChecked  {
  constructor(private router: Router, private currentRoute: ActivatedRoute) { }

  // tslint:disable-next-line: no-input-rename
  @Input() orderedListData: {
    orderedListType: string,
    OrderedListArray: Order[]
   };

   @Output() showDetails = new EventEmitter<boolean>();

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ORDER-LIST-DATA ', this.orderedListData); // Angular will not call ngOnChanges lifeCycle because orderedListData is an object type so only if the reference of this object is changed, then this lifeCycle will be called
    console.log('changes ', changes);
  }

  ngAfterViewChecked(): void {
    console.log('ORDER-LIST-DATA ngAfterViewChecked ', this.orderedListData);
  }

  displayDetails(item: Order){
    console.log('SHOW ORDERED ITEM', item);
    this.showDetails.emit(true);
    this.router.navigate(['details'],
    {
      queryParams: {
        ref: item.ref,
        quantity: item.quantity,
        trackingStatus: item.trackingStatus,
        orderDate: item.orderDate,
        totalPrice: item.totalPrice,
        serveDate: item.serveDate,
        nbPreson: item.nbPreson,
        client: JSON.stringify({
          firstName: item.client.firstName,
          lastName: item.client.lastName,
          email: item.client.email,
          phone: item.client.phone
        }),
        menu: JSON.stringify({
          categorie: item.menu.categorie,
          name: item.menu.name,
          price: item.menu.price,
          imagePath: item.menu.imagePath
        }),
      },
      fragment :'details',
      relativeTo: this.currentRoute
    });
  }
}
