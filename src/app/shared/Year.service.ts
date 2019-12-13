import { Injectable } from '@angular/core';
import { IYear } from '../SeeTaxVars/year/Year';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';
import { Constants } from './constants';

@Injectable( {
    providedIn: 'root'
})
export class YearService extends ErrorHandler {

    private yearUrl = Constants.HOME_URL + 'years?format=json'

    constructor(private http: HttpClient) {
        super();
    }

    getYears(): Observable<IYear[]> {
        return this.http.get<IYear[]>(this.yearUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    

    /* getTaxBrackets(): ITaxBracket[] {
        return [ {
            "taxBracketId": 1,
            "startAmount": 0,
            "endAmount": 48535,
            "percentage": 0.15,
            "gov_type": "F",
            "year": 2020
          },
          {
            "taxBracketId": 2,
            "startAmount": 48536,
            "endAmount": 97069,
            "percentage": 0.205,
            "gov_type": "F",
            "year": 2020
          },
          {
            "taxBracketId": 3,
            "startAmount": 97070,
            "endAmount": 150473,
            "percentage": 0.26,
            "gov_type": "F",
            "year": 2020
          },
          {
            "taxBracketId": 4,
            "startAmount": 0,
            "endAmount": 47630,
            "percentage": 0.15,
            "gov_type": "F",
            "year": 2019
          } ]
    } */
}
