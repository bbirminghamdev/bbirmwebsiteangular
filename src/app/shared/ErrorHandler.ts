import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

export class ErrorHandler {

    public handleError(err: HttpErrorResponse) {

        let errorMessage = '';

        if(err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }

}