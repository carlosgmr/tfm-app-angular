import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AdministratorService } from '../../../../shared/services/administrator.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-admistrator-create',
  templateUrl: './admistrator-create.component.html',
  styles: []
})
export class AdmistratorCreateComponent implements OnInit {
  data: object = {};

  constructor(
    private administratorService: AdministratorService,
    private messageService: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.administratorService.create(this.data)
      .subscribe(response => {
        this.messageService.add('success', 'Registro creado correctamente');
        this.router.navigate(['/administrator/administrator', response['id']]);
      });
  }
}
