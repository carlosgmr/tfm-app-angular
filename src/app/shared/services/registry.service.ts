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
export class RegistryService {
  url = environment.api.url + 'registry';

  constructor(
    private http: HttpClient,
    private storageService: StorageService,
    private messageService: MessageService
  ) { }

  saveAttempt(idUser: any, idQuestionary: any, data: any): Observable<any> {
    return this.http.post<any>(this.url + '/user/' + idUser + '/questionary/' + idQuestionary, data, this.getHttpOptions())
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
