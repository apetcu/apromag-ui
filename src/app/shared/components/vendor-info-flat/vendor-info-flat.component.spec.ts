import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorInfoFlatComponent } from './vendor-info-flat.component';

describe('VendorInfoFlatComponent', () => {
  let component: VendorInfoFlatComponent;
  let fixture: ComponentFixture<VendorInfoFlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorInfoFlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VendorInfoFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
