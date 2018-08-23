import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { StorageService } from '../../services/storage.service';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  role: string;
  section: string;
  private subscriptionSection: Subscription;

  constructor(
    private storageService: StorageService,
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.role = this.storageService.getAppUser().role;
    this.subscriptionSection = this.layoutService.observableSection.subscribe(currentSection => {
      this.section = currentSection;
    });
  }
}
