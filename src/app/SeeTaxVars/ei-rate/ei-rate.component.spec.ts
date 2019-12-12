import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EiRateComponent } from './ei-rate.component';

describe('EiRateComponent', () => {
  let component: EiRateComponent;
  let fixture: ComponentFixture<EiRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EiRateComponent ]
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    fixture = TestBed.createComponent(EiRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
