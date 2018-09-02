import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: []
})
export class UserCreateComponent implements OnInit {
  title: string;
  data: any = {};

  constructor(
    private layoutService: LayoutService,
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Crear usuario';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('user');
  }

  onSubmit() {
    this.userService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/user', response['id']]);
      });
  }
}
