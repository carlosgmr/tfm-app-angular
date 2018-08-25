import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { StorageService } from '../../../../shared/services/storage.service';
import { MessageService } from '../../../../shared/services/message.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';
import { RegistryService } from '../../../../shared/services/registry.service';

@Component({
  selector: 'app-questionary-do-attempt',
  templateUrl: './questionary-do-attempt.component.html',
  styles: []
})
export class QuestionaryDoAttemptComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;
  questionaryMinimized: boolean;
  data: Array<object>;

  constructor(
    private layoutService: LayoutService,
    private storageService: StorageService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private router: Router,
    private questionaryService: QuestionaryService,
    private registryService: RegistryService
  ) { }

  ngOnInit() {
    this.title = 'Realizar examen/encuesta';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('questionary');

    this.questionaryMinimized = true;
    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.questionaryService.readBasic(this.id)
      .subscribe(response => {
        this.data = [];

        for (let i = 0; i < response['questions'].length; i++) {
          this.data.push({
            question: response['questions'][i]['id'],
            answer: null
          });
        }

        this.item = response;
        this.load = true;
      });
  }

  doAttempt() {
    this.registryService.saveAttempt(this.storageService.getAppUser().id, this.id, {registries: this.data})
      .subscribe(response => {
        this.messageService.add('success', 'Respuestas registradas correctamente');
        this.router.navigate(['/user/user/questionary', this.id]);
      });
    console.log(this.data);
  }
}
