import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-questionary-update',
  templateUrl: './questionary-update.component.html',
  styles: []
})
export class QuestionaryUpdateComponent implements OnInit {
  title: string;
  id: string;
  data: object = {};
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private questionaryService: QuestionaryService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Modificar examen/encuesta';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('questionary');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.questionaryService.read(this.id)
      .subscribe(response => {
        this.data['title'] = response['title'];
        this.data['description'] = response['description'];
        this.data['public'] = response['public'] + '';
        this.data['active'] = response['active'] + '';
        this.load = true;
      });
  }

  onSubmit() {
    this.questionaryService.update(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/instructor/questionary', this.id]);
      });
  }
}
