import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';
import { InstructorService } from '../../../../shared/services/instructor.service';
import { QuestionaryModelService } from '../../../../shared/services/questionary-model.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-questionary-create',
  templateUrl: './questionary-create.component.html',
  styles: []
})
export class QuestionaryCreateComponent implements OnInit {
  pageTitle: string;
  groups: Array<object>;
  loadGroups: boolean;
  models: Array<object>;
  loadModels: boolean;
  data: object = {};

  constructor(
    private layoutService: LayoutService,
    private storageService: StorageService,
    private questionaryService: QuestionaryService,
    private instructorService: InstructorService,
    private questionaryModelService: QuestionaryModelService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.pageTitle = 'Crear examen/encuesta';
    this.layoutService.currentTitle(this.pageTitle);
    this.layoutService.currentSection('questionary');

    this.loadGroups = false;
    this.loadModels = false;

    this.instructorService.listingGroup(this.storageService.getAppUser().id)
      .subscribe(response => {
        this.groups = response;
        this.loadGroups = true;
      });
    this.questionaryModelService.listing()
      .subscribe(response => {
        this.models = response;
        this.loadModels = true;
      });
  }

  onSubmit() {
    this.questionaryService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/instructor/questionary', response['id']]);
      });
  }
}
