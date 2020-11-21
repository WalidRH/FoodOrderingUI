import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedItemsListComponent } from './ordered-items-list.component';

describe('OrderedItemsListComponent', () => {
  let component: OrderedItemsListComponent;
  let fixture: ComponentFixture<OrderedItemsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedItemsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedItemsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
