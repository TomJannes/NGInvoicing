import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGeneralInfoFormCardComponent } from './general-info-form-card.component';

describe('GeneralInfoFormCardComponent', () => {
  let component: CustomerGeneralInfoFormCardComponent;
  let fixture: ComponentFixture<CustomerGeneralInfoFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGeneralInfoFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGeneralInfoFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
