import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSkuDetailComponent } from './customer-sku-detail.component';

describe('CustomerSkuDetailComponent', () => {
  let component: CustomerSkuDetailComponent;
  let fixture: ComponentFixture<CustomerSkuDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSkuDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSkuDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
