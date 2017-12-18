import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGeneralInfoFormCardComponent } from './profile-general-info-form-card.component';

describe('ProfileGeneralInfoCardComponent', () => {
  let component: ProfileGeneralInfoFormCardComponent;
  let fixture: ComponentFixture<ProfileGeneralInfoFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGeneralInfoFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGeneralInfoFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
