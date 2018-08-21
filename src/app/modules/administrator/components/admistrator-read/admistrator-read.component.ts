import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AdministratorService } from '../../../../shared/services/administrator.service';

@Component({
  selector: 'app-admistrator-read',
  templateUrl: './admistrator-read.component.html',
  styles: []
})
export class AdmistratorReadComponent implements OnInit {
  id: string;
  item: object;
  load: boolean;

  constructor(
    private route: ActivatedRoute,
    private administratorService: AdministratorService
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
}
