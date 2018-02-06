import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAfterLoginComponent } from './app-after-login.component';

describe('AppAfterLoginComponent', () => {
  let component: AppAfterLoginComponent;
  let fixture: ComponentFixture<AppAfterLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAfterLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
