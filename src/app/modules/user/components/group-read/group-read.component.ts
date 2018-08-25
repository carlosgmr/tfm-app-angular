import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { GroupService } from '../../../../shared/services/group.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-group-read',
  templateUrl: './group-read.component.html',
  styles: []
})
export class GroupReadComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  instructors: Array<object>;
  users: Array<object>;
  questionarys: Array<object>;
  load: boolean;
  loadInstructors: boolean;
  loadUsers: boolean;
  loadQuestionarys: boolean;

  constructor(
    private layoutService: LayoutService,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private groupService: GroupService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'Detalle de grupo';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.load = false;
    this.loadInstructors = false;
    this.loadUsers = false;
    this.loadQuestionarys = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.groupService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });

    this.groupService.listingInstructor(this.id)
      .subscribe(response => {
        this.instructors = response;
        this.loadInstructors = true;
      });

    this.groupService.listingUser(this.id)
      .subscribe(response => {
        this.users = response;
        this.loadUsers = true;
      });

    this.userService.questionnairesByGroupAndState(this.storageService.getAppUser().id, this.id)
      .subscribe(response => {
        this.questionarys = response;
        this.loadQuestionarys = true;
      });
  }
}
