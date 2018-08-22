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
export class QuestionaryService {
  url = environment.api.url + 'questionary';
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

  listing(): Observable<any> {
    return this.http.get<any>(this.url, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  read(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.url, data, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch<any>(this.url + '/' + id, data, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id, this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  readComplete(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '/complete', this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  readBasic(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '/basic', this.httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }

  addQuestions(id: any, data: any): Observable<any> {
    return this.http.post<any>(this.url + '/' + id + '/add-questions', data, this.httpOptions)
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
