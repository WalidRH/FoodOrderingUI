import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNewMenuComponent } from './list-new-menu.component';

describe('ListNewMenuComponent', () => {
  let component: ListNewMenuComponent;
  let fixture: ComponentFixture<ListNewMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListNewMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListNewMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
