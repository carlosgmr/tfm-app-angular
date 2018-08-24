import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { QuestionaryService } from '../../../../shared/services/questionary.service';

@Component({
  selector: 'app-questionary-read',
  templateUrl: './questionary-read.component.html',
  styles: []
})
export class QuestionaryReadComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private questionaryService: QuestionaryService
  ) { }

  ngOnInit() {
    this.title = 'Examen/encuesta';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('questionary');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.questionaryService.readComplete(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }
}
