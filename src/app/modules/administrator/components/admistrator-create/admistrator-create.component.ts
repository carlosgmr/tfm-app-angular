import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { AdministratorService } from '../../../../shared/services/administrator.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-admistrator-create',
  templateUrl: './admistrator-create.component.html',
  styles: []
})
export class AdmistratorCreateComponent implements OnInit {
  title: string;
  data: any = {};

  constructor(
    private layoutService: LayoutService,
    private administratorService: AdministratorService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = 'Crear administrador';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('administrator');
  }

  onSubmit() {
    this.administratorService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/administrator', response['id']]);
      });
  }
}
