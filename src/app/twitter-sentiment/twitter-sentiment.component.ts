import { Component, OnInit } from '@angular/core';
import { ITwitterSentiment } from './twitter-sentiment';
import { TwitterSentimentService } from './twitter-sentiment.service';

@Component({
  selector: 'app-twitter-sentiment',
  templateUrl: './twitter-sentiment.component.html',
  styleUrls: ['./twitter-sentiment.component.css']
})
export class TwitterSentimentComponent implements OnInit {

  pageTitle: string = "Twitter Sentiment Analyzer";
  searchTerm: string;
  errorMessage: string;
  searchComplete: boolean = false;
  loading: boolean = false;
  twitter_sentiments: ITwitterSentiment[];
  twitter_sentiment: ITwitterSentiment;

  search(searchTerm) {
    this.loading = true
    this.searchComplete=false
    console.log(`search clicked! var: ${searchTerm}`)
    this.twitterSentimentService.getSentiment(searchTerm).subscribe({
      next: twitter_sentiments => { 
        this.twitter_sentiments = twitter_sentiments
        this.twitter_sentiment = twitter_sentiments[0]
        this.loading = false
        this.searchComplete=true
      },
      error: err => { this.errorMessage = err }
    });
  }

  constructor( private twitterSentimentService : TwitterSentimentService) {

  }

  ngOnInit() {
  }

}
