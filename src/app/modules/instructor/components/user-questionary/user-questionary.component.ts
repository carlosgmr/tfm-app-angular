import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { UserService } from '../../../../shared/services/user.service';

@Component({
  selector: 'app-user-questionary',
  templateUrl: './user-questionary.component.html',
  styles: []
})
export class UserQuestionaryComponent implements OnInit {
  title: string;
  idUser: string;
  idQuestionary: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.title = 'Detalles realización examen/encuesta';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('');

    this.load = false;
    this.idUser = this.route.snapshot.paramMap.get('idUser');
    this.idQuestionary = this.route.snapshot.paramMap.get('idQuestionary');

    this.userService.questionaryDetails(this.idUser, this.idQuestionary)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }
}
