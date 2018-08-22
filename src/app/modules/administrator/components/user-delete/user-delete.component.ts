import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../shared/services/user.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styles: []
})
export class UserDeleteComponent implements OnInit {
  id: string;
  item: object;
  load: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }

  onDelete() {
    this.userService.delete(this.id)
      .subscribe(response => {
        this.messageService.add('success', 'Registro eliminado correctamente');
        this.router.navigate(['/administrator/user']);
      });
  }
}
