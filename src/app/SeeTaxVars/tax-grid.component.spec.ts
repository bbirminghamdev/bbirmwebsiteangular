import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxGridComponent } from './tax-grid.component';

describe('TaxGridComponent', () => {
  let component: TaxGridComponent;
  let fixture: ComponentFixture<TaxGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
