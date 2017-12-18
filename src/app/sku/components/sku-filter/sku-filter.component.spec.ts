import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFilterComponent } from './sku-filter.component';

describe('CustomerFilterComponent', () => {
  let component: SkuFilterComponent;
  let fixture: ComponentFixture<SkuFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
