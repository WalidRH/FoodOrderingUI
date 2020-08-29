import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvantagesBlockComponent } from './avantages-block.component';

describe('AvantagesBlockComponent', () => {
  let component: AvantagesBlockComponent;
  let fixture: ComponentFixture<AvantagesBlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvantagesBlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvantagesBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
