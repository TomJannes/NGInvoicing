import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuGeneralInfoFormCardComponent } from './sku-general-info-form-card.component';

describe('GeneralInfoFormCardComponent', () => {
  let component: SkuGeneralInfoFormCardComponent;
  let fixture: ComponentFixture<SkuGeneralInfoFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuGeneralInfoFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuGeneralInfoFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
