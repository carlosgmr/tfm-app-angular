import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';
import { GroupService } from '../../../../shared/services/group.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styles: []
})
export class UserGroupComponent implements OnInit {
  title: string;
  id: string;
  data: object = {
    group: []
  };
  allGroups: Array<object>;
  loadAllGroups: boolean;
  currentGroups: Array<number>;
  loadCurrentGroups: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private groupService: GroupService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.title = 'Inscribir en grupos';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('user');

    this.loadAllGroups = false;
    this.currentGroups = [];
    this.loadCurrentGroups = true;
    this.id = this.route.snapshot.paramMap.get('id');

    this.groupService.listing()
      .subscribe(response => {
        this.allGroups = response;
        this.loadAllGroups = true;
      });

    this.userService.listingGroup(this.id)
      .subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.currentGroups.push(response[i]['id']);
        }

        this.loadCurrentGroups = true;
      });
  }

  onSubmit() {
    this.data['group'] = this.currentGroups;
    this.userService.currentGroup(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/user', this.id]);
      });
  }

  onChange(element: any) {
    const value = parseInt(element.value, 10);
    const index = this.currentGroups.indexOf(value);

    if (element.checked && index === -1) {
      this.currentGroups.push(value);
    } else if (!element.checked && index !== -1) {
      this.currentGroups.splice(index, 1);
    }
  }
}
