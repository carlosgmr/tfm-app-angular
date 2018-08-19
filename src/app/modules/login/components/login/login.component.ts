import { Component, OnInit, OnDestroy, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../../../../environments/environment';
import { LoginRequest } from '../../../../shared/models/login-request';
import { LoginService } from '../../../../shared/services/login.service';
import { StorageService } from '../../../../shared/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
  appInfo = environment.app;
  roles = [
    { value: 'user', text: 'Usuario' },
    { value: 'instructor', text: 'Instructor' },
    { value: 'administrator', text: 'Administrador' }
  ];
  model = new LoginRequest(null, null, null);
  response = null;

  constructor(
    private renderer: Renderer2,
    private router: Router,
    private loginService: LoginService,
    private storageService: StorageService
  ) {}

  ngOnInit() {
    // quitamos clases por defecto
    this.renderer.removeClass(document.body, 'hold-transition');
    this.renderer.removeClass(document.body, 'skin-blue');
    this.renderer.removeClass(document.body, 'sidebar-mini');
    // añadimos clases específicas login
    this.renderer.addClass(document.body, 'hold-transitionlogin-page');
    this.renderer.addClass(document.body, 'login-page');
  }

  ngOnDestroy() {
    // quitamos clases específicas login
    this.renderer.removeClass(document.body, 'hold-transitionlogin-page');
    this.renderer.removeClass(document.body, 'login-page');
    // añadimos clases por defecto
    this.renderer.addClass(document.body, 'hold-transition');
    this.renderer.addClass(document.body, 'skin-blue');
    this.renderer.addClass(document.body, 'sidebar-mini');
  }

  onSubmit() {
    this.loginService.login(this.model)
      .subscribe(loginResponse => {
        this.storageService.setCurrentSession(loginResponse);
        this.router.navigate(['/' + loginResponse.user.role]);
      });
  }
}
