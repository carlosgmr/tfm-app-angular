import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';

@Component({
  selector: 'app-group-listing',
  templateUrl: './group-listing.component.html',
  styles: []
})
export class GroupListingComponent implements OnInit {
  title: string;
  items: Array<object>;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private groupService: GroupService
  ) {}

  ngOnInit() {
    this.title = 'Listado de grupos';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.load = false;
    this.groupService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
