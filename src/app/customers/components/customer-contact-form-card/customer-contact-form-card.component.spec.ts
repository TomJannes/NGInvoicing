import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerContactFormCardComponent } from './customer-contact-form-card.component';

describe('CustomerContactFormCardComponent', () => {
  let component: CustomerContactFormCardComponent;
  let fixture: ComponentFixture<CustomerContactFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerContactFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerContactFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
