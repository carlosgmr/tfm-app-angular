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
export class UserService {
  url = environment.api.url + 'user';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private messageService: MessageService
  ) { }

  listing(): Observable<any> {
    return this.http.get<any>(this.url, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  read(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  create(data: any): Observable<any> {
    return this.http.post<any>(this.url, data, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  update(id: any, data: any): Observable<any> {
    return this.http.patch<any>(this.url + '/' + id, data, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  delete(id: any): Observable<any> {
    return this.http.delete<any>(this.url + '/' + id, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  listingGroup(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '/group', this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  currentGroup(id: any, data: any): Observable<any> {
    return this.http.post<any>(this.url + '/' + id + '/group', data, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  questionnairesMade(id: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + id + '/group/questionary', this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  questionaryDetails(idUser: any, idQuestionary: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + idUser + '/questionary/' + idQuestionary, this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  questionnairesByGroupAndState(idUser: any, idGroup: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + idUser + '/group/' + idGroup + '/questionary/by-state', this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  questionnairesByState(idUser: any): Observable<any> {
    return this.http.get<any>(this.url + '/' + idUser + '/questionary/by-state', this.getHttpOptions())
      .pipe(
        catchError(this.handleError())
      );
  }

  private getHttpOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.storageService.getToken()
      }),
    };
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
