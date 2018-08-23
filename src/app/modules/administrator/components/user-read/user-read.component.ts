import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styles: []
})
export class UserReadComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  groups: Array<object>;
  load: boolean;
  loadGroups: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'Detalle de usuario';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('user');

    this.load = false;
    this.loadGroups = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.userService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });

    this.userService.listingGroup(this.id)
      .subscribe(response => {
        this.groups = response;
        this.loadGroups = true;
      });
  }
}
