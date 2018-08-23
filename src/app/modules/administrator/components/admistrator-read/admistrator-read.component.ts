import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LayoutService } from '../../../../shared/services/layout.service';
import { AdministratorService } from '../../../../shared/services/administrator.service';

@Component({
  selector: 'app-admistrator-read',
  templateUrl: './admistrator-read.component.html',
  styles: []
})
export class AdmistratorReadComponent implements OnInit {
  title: string;
  id: string;
  item: object;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private route: ActivatedRoute,
    private administratorService: AdministratorService
  ) { }

  ngOnInit() {
    this.title = 'Detalle de administrador';
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
}
