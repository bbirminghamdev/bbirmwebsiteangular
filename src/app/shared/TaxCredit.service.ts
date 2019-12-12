import { Injectable } from '@angular/core';
import { ITaxCredit } from '../SeeTaxVars/tax-credits/TaxCredit';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';


@Injectable( {
    providedIn: 'root'
})
export class TaxCreditService extends ErrorHandler {

    private taxCreditUrl = 'http://127.0.0.1:8000/tax_credits?format=json'

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
