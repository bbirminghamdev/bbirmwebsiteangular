import { Injectable } from '@angular/core';
import { ITaxCredit } from '../SeeTaxVars/tax-credits/TaxCredit';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';
import { Constants } from './constants';

@Injectable( {
    providedIn: 'root'
})
export class TaxCreditService extends ErrorHandler {

    private taxCreditUrl = Constants.HOME_URL + 'tax_credits?format=json'

    constructor(private http: HttpClient) {
        super();
    }

    getTaxCredits(): Observable<ITaxCredit[]> {
        return this.http.get<ITaxCredit[]>(this.taxCreditUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

}
