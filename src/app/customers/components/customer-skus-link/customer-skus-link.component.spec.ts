import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSkusLinkComponent } from './customer-skus-link.component';

describe('CustomerSkusLinkComponent', () => {
  let component: CustomerSkusLinkComponent;
  let fixture: ComponentFixture<CustomerSkusLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSkusLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSkusLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
