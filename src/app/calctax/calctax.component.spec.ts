import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalctaxComponent } from './calctax.component';

describe('CalctaxComponent', () => {
  let component: CalctaxComponent;
  let fixture: ComponentFixture<CalctaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalctaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalctaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
