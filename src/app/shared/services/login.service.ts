import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { LoginRequest } from '../models/login-request';
import { LoginResponse } from '../models/login-response';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = environment.api.url + 'auth/login';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) { }

  login (data: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  private handleError() {
    const messageService = this.messageService;

    return function(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        messageService.add('error', error.error.message);
      } else {
        messageService.addApiError(error.error);
      }

      return throwError('Something bad happened; please try again later.');
    };
  }
}
