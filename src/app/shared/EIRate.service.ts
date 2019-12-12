import { Injectable } from '@angular/core';
import { IYear } from '../SeeTaxVars/year/Year';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'


@Injectable( {
    providedIn: 'root'
})
export class TaxCreditService {

    private yearUrl = 'http://127.0.0.1:8000/years?format=json'

    constructor(private http: HttpClient) { }

    getTaxCredits(): Observable<IYear[]> {
        return this.http.get<IYear[]>(this.yearUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
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
