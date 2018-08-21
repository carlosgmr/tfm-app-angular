import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AdministratorService } from '../../../../shared/services/administrator.service';
import { MessageService } from '../../../../shared/services/message.service';

@Component({
  selector: 'app-admistrator-delete',
  templateUrl: './admistrator-delete.component.html',
  styles: []
})
export class AdmistratorDeleteComponent implements OnInit {
  id: string;
  item: object;
  load: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private administratorService: AdministratorService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
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
