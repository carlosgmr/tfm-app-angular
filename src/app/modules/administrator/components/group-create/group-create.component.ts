import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-group-create',
  templateUrl: './group-create.component.html',
  styles: []
})
export class GroupCreateComponent implements OnInit {
  title: string;
  data: object = {};

  constructor(
    private layoutService: LayoutService,
    private groupService: GroupService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Crear grupo';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');
  }

  onSubmit() {
    this.groupService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/group', response['id']]);
      });
  }
}
