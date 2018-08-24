import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { InstructorService } from '../../../../shared/services/instructor.service';

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
    private storageService: StorageService,
    private instructorService: InstructorService
  ) {}

  ngOnInit() {
    this.title = 'Listado de grupos';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.load = false;
    this.instructorService.listingGroup(this.storageService.getAppUser().id)
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
