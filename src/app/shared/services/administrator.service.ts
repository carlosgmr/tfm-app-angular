import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { StorageService } from './storage.service';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class AdministratorService {
  url = environment.api.url + 'administrator';
  httpOptions: object;

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private messageService: MessageService
  ) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.storageService.getToken()
      }),
    };
  }

  listing (): Observable<any> {
    this.messageService.clear();
    return this.http.get<any>(this.url, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  private handleError() {
    const messageService = this.messageService;

    return function(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        messageService.add('error', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        messageService.addApiError(error.error);
      }
      // return an observable with a user-facing error message
      return throwError('Something bad happened; please try again later.');
    };
  }
}
