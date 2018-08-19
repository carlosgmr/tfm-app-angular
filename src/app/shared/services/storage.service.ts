import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { LoginResponse } from '../models/login-response';
import { Session } from '../models/session';
import { AppUser } from '../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private localStorageService;
  private currentSession: Session = null;
  public isAuthenticated = false;

  constructor(private router: Router) {
    this.localStorageService = localStorage;
    this.loadSessionData();
    this.isAuthenticated = this.currentSession !== null;
  }

  loadSessionData(): void {
    const sessionStr = this.localStorageService.getItem('currentSession');
    const sessionObj = sessionStr ? JSON.parse(sessionStr) : null;

    if (sessionObj) {
      this.currentSession = new Session();
      this.currentSession.appUser = <AppUser> sessionObj.appUser;
      this.currentSession.token = sessionObj.token;
    } else {
      this.currentSession = null;
    }
  }

  getAppUser(): AppUser {
    return (this.currentSession && this.currentSession.appUser) ? this.currentSession.appUser : null;
  }

  getToken(): string {
    return (this.currentSession && this.currentSession.token) ? this.currentSession.token : null;
  }

  setCurrentSession(loginResponse: LoginResponse): void {
    this.currentSession = new Session();
    this.currentSession.appUser = loginResponse.user;
    this.currentSession.token = loginResponse.token;
    this.isAuthenticated = true;
    this.localStorageService.setItem('currentSession', JSON.stringify(this.currentSession));
  }

  removeCurrentSession(): void {
    this.localStorageService.removeItem('currentSession');
    this.currentSession = null;
    this.isAuthenticated = false;
  }

  logout(): void {
    this.removeCurrentSession();
    this.router.navigate(['/login']);
  }
}
