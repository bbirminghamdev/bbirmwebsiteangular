import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CppRateComponent } from './cpp-rate.component';

describe('CppRateComponent', () => {
  let component: CppRateComponent;
  let fixture: ComponentFixture<CppRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CppRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CppRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
