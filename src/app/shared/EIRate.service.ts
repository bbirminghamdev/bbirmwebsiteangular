import { Injectable } from '@angular/core';
import { IEIRate } from '../SeeTaxVars/ei-rate/ei-rate';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';
import { Constants } from './constants';

@Injectable( {
    providedIn: 'root'
})
export class EIRateService extends ErrorHandler {

    private eiRateUrl = Constants.HOME_URL + 'ei_rates?format=json'

    constructor(private http: HttpClient) {
        super();
    }

    getEIRates(): Observable<IEIRate[]> {
        return this.http.get<IEIRate[]>(this.eiRateUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
}
