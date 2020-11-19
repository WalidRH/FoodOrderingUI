import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedItemDetailsComponent } from './ordered-item-details.component';

describe('OrderedItemDetailsComponent', () => {
  let component: OrderedItemDetailsComponent;
  let fixture: ComponentFixture<OrderedItemDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedItemDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedItemDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
