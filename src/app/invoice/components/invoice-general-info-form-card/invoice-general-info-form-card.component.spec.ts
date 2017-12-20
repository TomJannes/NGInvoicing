import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceGeneralInfoFormCardComponent } from './invoice-general-info-form-card.component';

describe('InvoiceGeneralInfoFormCardComponent', () => {
  let component: InvoiceGeneralInfoFormCardComponent;
  let fixture: ComponentFixture<InvoiceGeneralInfoFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceGeneralInfoFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceGeneralInfoFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
