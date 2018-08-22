import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../../../shared/services/user.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styles: []
})
export class UserCreateComponent implements OnInit {
  data: object = {};

  constructor(
    private userService: UserService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.userService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/user', response['id']]);
      });
  }
}
