import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { GroupService } from '../../../../shared/services/group.service';
import { InstructorService } from '../../../../shared/services/instructor.service';

import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-group-instructor',
  templateUrl: './group-instructor.component.html',
  styles: []
})
export class GroupInstructorComponent implements OnInit {
  title: string;
  id: string;
  data: object = {
    instructor: []
  };
  allInstructors: Array<object>;
  loadAllInstructors: boolean;
  currentInstructors: Array<number>;
  loadCurrentInstructors: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private groupService: GroupService,
    private instructorService: InstructorService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.title = 'Inscribir instructores';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('group');

    this.loadAllInstructors = false;
    this.currentInstructors = [];
    this.loadCurrentInstructors = true;
    this.id = this.route.snapshot.paramMap.get('id');

    this.instructorService.listing()
      .subscribe(response => {
        this.allInstructors = response;
        this.loadAllInstructors = true;
      });

    this.groupService.listingInstructor(this.id)
      .subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.currentInstructors.push(response[i]['id']);
        }

        this.loadCurrentInstructors = true;
      });
  }

  onSubmit() {
    this.data['instructor'] = this.currentInstructors;
    this.groupService.currentInstructor(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/group', this.id]);
      });
  }

  onChange(element: any) {
    const value = parseInt(element.value, 10);
    const index = this.currentInstructors.indexOf(value);

    if (element.checked && index === -1) {
      this.currentInstructors.push(value);
    } else if (!element.checked && index !== -1) {
      this.currentInstructors.splice(index, 1);
    }
  }
}
