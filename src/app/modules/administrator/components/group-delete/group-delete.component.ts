import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-group-delete',
  templateUrl: './group-delete.component.html',
  styles: []
})
export class GroupDeleteComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Eliminar grupo';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.groupService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }

  onDelete() {
    this.groupService.delete(this.id)
      .subscribe(response => {
        this.messageService.add('success', 'Registro eliminado correctamente');
        this.router.navigate(['/administrator/group']);
      });
  }
}
