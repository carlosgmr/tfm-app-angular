import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styles: []
})
export class UserUpdateComponent implements OnInit {
  title: string;
  id: string;
  data: object = {};
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Modificar usuario';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('user');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.read(this.id)
      .subscribe(response => {
        this.data['email'] = response['email'];
        this.data['name'] = response['name'];
        this.data['surname_1'] = response['surname_1'];
        this.data['surname_2'] = response['surname_2'];
        this.data['active'] = response['active'] + '';
        this.load = true;
      });
  }

  onSubmit() {
    this.userService.update(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/user', this.id]);
      });
  }
}
