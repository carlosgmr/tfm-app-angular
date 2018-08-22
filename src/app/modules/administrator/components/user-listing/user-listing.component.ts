import { Component, OnInit } from '@angular/core';

import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styles: []
})
export class UserListingComponent implements OnInit {
  items: Array<object>;
  load: boolean;

  constructor(
    private userService: UserService
  ) {}

  ngOnInit() {
    this.load = false;

    this.userService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
