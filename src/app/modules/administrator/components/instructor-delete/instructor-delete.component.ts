import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { InstructorService } from '../../../../shared/services/instructor.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-instructor-delete',
  templateUrl: './instructor-delete.component.html',
  styles: []
})
export class InstructorDeleteComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private instructorService: InstructorService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Eliminar instructor';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('instructor');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.instructorService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }

  onDelete() {
    this.instructorService.delete(this.id)
      .subscribe(response => {
        this.messageService.add('success', 'Registro eliminado correctamente');
        this.router.navigate(['/administrator/instructor']);
      });
  }
}
