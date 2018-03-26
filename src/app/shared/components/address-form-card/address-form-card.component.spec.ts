import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressFormCardComponent } from './address-form-card.component';

describe('AddressFormComponent', () => {
  let component: AddressFormCardComponent;
  let fixture: ComponentFixture<AddressFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddressFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
