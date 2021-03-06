import { Injectable } from '@angular/core';
import { ICPPRate } from '../SeeTaxVars/cpp-rate/cpp-rate';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';
import { Constants } from './constants';

@Injectable( {
    providedIn: 'root'
})
export class CPPRateService extends ErrorHandler {

    private cpprateUrl = Constants.HOME_URL + 'cpp_rates?format=json'

    constructor(private http: HttpClient) {
        super();
    }

    getCPPRates(): Observable<ICPPRate[]> {
        return this.http.get<ICPPRate[]>(this.cpprateUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
}
