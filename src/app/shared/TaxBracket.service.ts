import { Injectable } from '@angular/core';
import { ITaxBracket } from '../SeeTaxVars/TaxBrackets/TaxBracket';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap} from 'rxjs/operators'
import { ErrorHandler } from './ErrorHandler';


@Injectable( {
    providedIn: 'root'
})
export class TaxBracketService extends ErrorHandler {

    private taxBracketUrl = 'http://127.0.0.1:8000/tax_brackets?format=json'

    constructor(private http: HttpClient) {
        super();
    }

    getTaxBrackets(): Observable<ITaxBracket[]> {
        return this.http.get<ITaxBracket[]>(this.taxBracketUrl)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }
}
