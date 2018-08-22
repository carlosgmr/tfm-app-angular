import { Component, OnInit } from '@angular/core';

import { InstructorService } from '../../../../shared/services/instructor.service';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styles: []
})
export class InstructorListingComponent implements OnInit {
  items: Array<object>;
  load: boolean;

  constructor(
    private instructorService: InstructorService
  ) {}

  ngOnInit() {
    this.load = false;

    this.instructorService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
