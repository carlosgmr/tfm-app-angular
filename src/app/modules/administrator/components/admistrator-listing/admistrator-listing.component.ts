import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../../../shared/services/layout.service';
import { AdministratorService } from '../../../../shared/services/administrator.service';

@Component({
  selector: 'app-admistrator-listing',
  templateUrl: './admistrator-listing.component.html'
})
export class AdmistratorListingComponent implements OnInit {
  title: string;
  items: Array<object>;
  load: boolean;

  constructor(
    private layoutService: LayoutService,
    private administratorService: AdministratorService
  ) {}

  ngOnInit() {
    this.title = 'Listado de administradores';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('administrator');

    this.load = false;
    this.administratorService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
