import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  private appInfo = environment.app;
  public data: object = null;

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.data = {
      appName1: this.appInfo.name1,
      appName2: this.appInfo.name2,
      urlHome: this.storageService.getAppUser().role,
      fullname: this.storageService.getAppUser().fullname,
      createdAt: this.storageService.getAppUser().created_at
    };
  }

  logout(): void {
    this.storageService.logout();
  }
}
