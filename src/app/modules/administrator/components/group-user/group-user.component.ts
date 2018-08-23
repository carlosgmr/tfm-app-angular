import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';
import { UserService } from '../../../../shared/services/user.service';

import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-group-user',
  templateUrl: './group-user.component.html',
  styles: []
})
export class GroupUserComponent implements OnInit {
  title: string;
  id: string;
  data: object = {
    user: []
  };
  allUsers: Array<object>;
  loadAllUsers: boolean;
  currentUsers: Array<number>;
  loadCurrentUsers: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private userService: UserService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.title = 'Inscribir usuarios';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.loadAllUsers = false;
    this.currentUsers = [];
    this.loadCurrentUsers = true;
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.listing()
      .subscribe(response => {
        this.allUsers = response;
        this.loadAllUsers = true;
      });

    this.groupService.listingUser(this.id)
      .subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.currentUsers.push(response[i]['id']);
        }

        this.loadCurrentUsers = true;
      });
  }

  onSubmit() {
    this.data['user'] = this.currentUsers;
    this.groupService.currentUser(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/group', this.id]);
      });
  }

  onChange(element: any) {
    const value = parseInt(element.value, 10);
    const index = this.currentUsers.indexOf(value);

    if (element.checked && index === -1) {
      this.currentUsers.push(value);
    } else if (!element.checked && index !== -1) {
      this.currentUsers.splice(index, 1);
    }
  }
}
