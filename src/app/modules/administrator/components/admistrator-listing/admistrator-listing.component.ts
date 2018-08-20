import { Component, OnInit } from '@angular/core';

import { AdministratorService } from '../../../../shared/services/administrator.service';

@Component({
  selector: 'app-admistrator-listing',
  templateUrl: './admistrator-listing.component.html'
})
export class AdmistratorListingComponent implements OnInit {
  items: Array<any>;
  load: boolean;

  constructor(
    private administratorService: AdministratorService
  ) {}

  ngOnInit() {
    this.load = false;

    this.administratorService.listing()
      .subscribe(response => {
        this.items = response;
        this.load = true;
      });
  }
}
