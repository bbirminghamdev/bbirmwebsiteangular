import { Injectable } from '@angular/core';
import { ITaxCredit } from '../SeeTaxVars/tax-credits/TaxCredit';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { Constants } from '../shared/constants';
import { ErrorHandler } from '../shared/ErrorHandler';
import { ITwitterSentiment } from './twitter-sentiment';

@Injectable( {
    providedIn: 'root'
})
export class TwitterSentimentService extends ErrorHandler {

    private twitterSentimentUrl = Constants.HOME_URL + 'twitter_sentiments?search_term='

    constructor(private http: HttpClient) {
        super();
    }

    getSentiment(search_term: string): Observable<ITwitterSentiment[]> {
        return this.http.get<ITwitterSentiment[]>(this.twitterSentimentUrl+search_term)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

}