import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';
import { GroupService } from '../../../../shared/services/group.service';
import { QuestionaryModelService } from '../../../../shared/services/questionary-model.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-questionary-delete',
  templateUrl: './questionary-delete.component.html',
  styles: []
})
export class QuestionaryDeleteComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;
  group: object;
  loadGroup: boolean;
  model: object;
  loadModel: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private questionaryService: QuestionaryService,
    private groupService: GroupService,
    private questionaryModelService: QuestionaryModelService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Eliminar examen/encuesta';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('questionary');

    this.load = false;
    this.loadGroup = false;
    this.loadModel = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.questionaryService.read(this.id)
      .subscribe(response => {
        this.item = response;

        this.groupService.read(this.item['group'])
          .subscribe(response2 => {
            this.group = response2;
            this.loadGroup = true;
          });

        this.questionaryModelService.read(this.item['model'])
          .subscribe(response2 => {
            this.model = response2;
            this.loadModel = true;
          });

        this.load = true;
      });
  }

  onDelete() {
    this.questionaryService.delete(this.id)
      .subscribe(response => {
        this.messageService.add('success', 'Registro eliminado correctamente');
        this.router.navigate(['/instructor/questionary']);
      });
  }
}
