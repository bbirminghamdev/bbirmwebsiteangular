import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterSentimentComponent } from './twitter-sentiment.component';

describe('TwitterSentimentComponent', () => {
  let component: TwitterSentimentComponent;
  let fixture: ComponentFixture<TwitterSentimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterSentimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterSentimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
