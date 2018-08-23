import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-group-update',
  templateUrl: './group-update.component.html',
  styles: []
})
export class GroupUpdateComponent implements OnInit {
  title: string;
  id: string;
  data: object = {};
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Modificar grupo';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.groupService.read(this.id)
      .subscribe(response => {
        this.data['name'] = response['name'];
        this.data['description'] = response['description'];
        this.data['active'] = response['active'] + '';
        this.load = true;
      });
  }

  onSubmit() {
    this.groupService.update(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/group', this.id]);
      });
  }
}
