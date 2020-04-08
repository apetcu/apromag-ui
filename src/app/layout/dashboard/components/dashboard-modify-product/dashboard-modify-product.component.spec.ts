import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardModifyProductComponent } from './dashboard-modify-product.component';

describe('DashboardModifyProductComponent', () => {
  let component: DashboardModifyProductComponent;
  let fixture: ComponentFixture<DashboardModifyProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardModifyProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardModifyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
