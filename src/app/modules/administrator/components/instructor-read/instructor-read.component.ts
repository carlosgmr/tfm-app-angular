import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { InstructorService } from '../../../../shared/services/instructor.service';

@Component({
  selector: 'app-instructor-read',
  templateUrl: './instructor-read.component.html',
  styles: []
})
export class InstructorReadComponent implements OnInit {
  id: string;
  item: object;
  groups: Array<object>;
  load: boolean;
  loadGroups: boolean;

  constructor(
    private route: ActivatedRoute,
    private instructorService: InstructorService
  ) { }

  ngOnInit() {
    this.load = false;
    this.loadGroups = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.instructorService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });

    this.instructorService.listingGroup(this.id)
      .subscribe(response => {
        this.groups = response;
        this.loadGroups = true;
      });
  }
}
