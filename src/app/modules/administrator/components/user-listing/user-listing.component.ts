import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styles: []
})
export class UserListingComponent implements OnInit {
  title: string;
  items: Array<object>;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.title = 'Listado de usuarios';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('user');

    this.load = false;
    this.userService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
