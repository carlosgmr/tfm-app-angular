import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { AdministratorService } from '../../../../shared/services/administrator.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-admistrator-delete',
  templateUrl: './admistrator-delete.component.html',
  styles: []
})
export class AdmistratorDeleteComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private router: Router,
    private administratorService: AdministratorService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.title = 'Eliminar administrador';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('administrator');

    this.load = false;
    this.id = this.route.snapshot.paramMap.get('id');

    this.administratorService.read(this.id)
      .subscribe(response => {
        this.item = response;
        this.load = true;
      });
  }

  onDelete() {
    this.administratorService.delete(this.id)
      .subscribe(response => {
        this.messageService.add('success', 'Registro eliminado correctamente');
        this.router.navigate(['/administrator/administrator']);
      });
  }
}
