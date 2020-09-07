import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisheContentComponent } from './dishe-content.component';

describe('DisheContentComponent', () => {
  let component: DisheContentComponent;
  let fixture: ComponentFixture<DisheContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisheContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisheContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
