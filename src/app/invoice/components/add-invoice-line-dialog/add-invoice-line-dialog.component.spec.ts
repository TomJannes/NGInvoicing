import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInvoiceLineDialogComponent } from './add-invoice-line-dialog.component';

describe('AddInvoiceLineDialogComponent', () => {
  let component: AddInvoiceLineDialogComponent;
  let fixture: ComponentFixture<AddInvoiceLineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInvoiceLineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInvoiceLineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
