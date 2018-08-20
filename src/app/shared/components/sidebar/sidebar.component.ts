import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  role: string;

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit() {
    this.role = this.storageService.getAppUser().role;
  }
}
