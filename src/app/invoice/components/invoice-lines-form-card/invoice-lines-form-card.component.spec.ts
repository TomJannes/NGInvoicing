import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceLinesFormCardComponent } from './invoice-lines-form-card.component';

describe('InvoiceLinesFormCardComponent', () => {
  let component: InvoiceLinesFormCardComponent;
  let fixture: ComponentFixture<InvoiceLinesFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceLinesFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceLinesFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
