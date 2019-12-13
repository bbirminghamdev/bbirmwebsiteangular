import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkHoverButtonComponent } from './linkHoverButton.component';

describe('LinkhoverbuttonComponent', () => {
  let component: LinkHoverButtonComponent;
  let fixture: ComponentFixture<LinkHoverButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkHoverButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkHoverButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
