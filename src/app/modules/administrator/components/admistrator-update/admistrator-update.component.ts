import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { AdministratorService } from '../../../../shared/services/administrator.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-admistrator-update',
  templateUrl: './admistrator-update.component.html',
  styles: []
})
export class AdmistratorUpdateComponent implements OnInit {
  title: string;
  id: string;
  data: object = {};
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private administratorService: AdministratorService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Modificar administrador';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('administrator');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.administratorService.read(this.id)
      .subscribe(response => {
        this.data['email'] = response['email'];
        this.data['name'] = response['name'];
        this.data['surname_1'] = response['surname_1'];
        this.data['surname_2'] = response['surname_2'];
        this.data['active'] = response['active'] + '';
        this.load = true;
      });
  }

  onSubmit() {
    this.administratorService.update(this.id, this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro actualizado correctamente');
        this.router.navigate(['/administrator/administrator', this.id]);
      });
  }
}
