import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { InstructorService } from '../../../../shared/services/instructor.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styles: []
})
export class InstructorCreateComponent implements OnInit {
  title: string;
  data: object = {};

  constructor(
    private layoutService: LayoutService,
    private instructorService: InstructorService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Crear instructor';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('instructor');
  }

  onSubmit() {
    this.instructorService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/instructor', response['id']]);
      });
  }
}
