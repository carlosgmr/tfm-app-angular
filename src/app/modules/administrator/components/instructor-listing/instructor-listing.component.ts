import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../../shared/services/layout.service';
import { InstructorService } from '../../../../shared/services/instructor.service';

@Component({
  selector: 'app-instructor-listing',
  templateUrl: './instructor-listing.component.html',
  styles: []
})
export class InstructorListingComponent implements OnInit {
  title: string;
  items: Array<object>;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private instructorService: InstructorService
  ) {}

  ngOnInit() {
    this.title = 'Listado de instructores';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('instructor');

    this.load = false;
    this.instructorService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
