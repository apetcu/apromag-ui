import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileCartComponent } from './mobile-cart.component';

describe('MobileCartComponent', () => {
  let component: MobileCartComponent;
  let fixture: ComponentFixture<MobileCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
