import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { InstructorService } from '../../../../shared/services/instructor.service';
import { GroupService } from '../../../../shared/services/group.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-instructor-group',
  templateUrl: './instructor-group.component.html',
  styles: []
})
export class InstructorGroupComponent implements OnInit {
  title: string;
  id: string;
  data: object = {
    group: []
  };
  allGroups: Array<object>;
  loadAllGroups: boolean;
  currentGroups: Array<number>;
  loadCurrentGroups: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService,
    private groupService: GroupService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this.title = 'Inscribir en grupos';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('instructor');

    this.loadAllGroups = false;
    this.currentGroups = [];
    this.loadCurrentGroups = true;
    this.id = this.route.snapshot.paramMap.get('id');

    this.groupService.listing()
      .subscribe(response => {
        this.allGroups = response;
        this.loadAllGroups = true;
      });

    this.instructorService.listingGroup(this.id)
      .subscribe(response => {
        for (let i = 0; i < response.length; i++) {
          this.currentGroups.push(response[i]['id']);
        }

        this.loadCurrentGroups = true;
      });
  }

  onSubmit() {
    this.data['group'] = this.currentGroups;
    this.instructorService.currentGroup(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/instructor', this.id]);
      });
  }

  onChange(element: any) {
    const value = parseInt(element.value, 10);
    const index = this.currentGroups.indexOf(value);

    if (element.checked && index === -1) {
      this.currentGroups.push(value);
    } else if (!element.checked && index !== -1) {
      this.currentGroups.splice(index, 1);
    }
  }
}
