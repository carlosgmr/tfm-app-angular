import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InstructorService } from '../../../../shared/services/instructor.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-instructor-create',
  templateUrl: './instructor-create.component.html',
  styles: []
})
export class InstructorCreateComponent implements OnInit {
  data: object = {};

  constructor(
    private instructorService: InstructorService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.instructorService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/instructor', response['id']]);
      });
  }
}
