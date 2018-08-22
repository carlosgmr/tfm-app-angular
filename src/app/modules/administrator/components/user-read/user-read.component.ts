import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styles: []
})
export class UserReadComponent implements OnInit {
  id: string;
  item: object;
  groups: Array<object>;
  load: boolean;
  loadGroups: boolean;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
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
