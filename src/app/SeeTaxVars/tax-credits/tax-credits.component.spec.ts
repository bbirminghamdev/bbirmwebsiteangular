import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxCreditsComponent } from './tax-credits.component';

describe('TaxCreditsComponent', () => {
  let component: TaxCreditsComponent;
  let fixture: ComponentFixture<TaxCreditsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxCreditsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxCreditsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
