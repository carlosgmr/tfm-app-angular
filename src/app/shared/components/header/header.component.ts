import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { StorageService } from '../../services/storage.service';
import { HeaderInfo } from '../../models/header-info';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {
  private appInfo = environment.app;
  public data: HeaderInfo;

  constructor(
    private storageService: StorageService
  ) {}

  ngOnInit() {
    this.data = new HeaderInfo(
      this.appInfo.name1,
      this.appInfo.name2,
      this.storageService.getAppUser().role,
      this.storageService.getAppUser().fullname,
      this.storageService.getAppUser().created_at
    );
  }

  logout(): void {
    this.storageService.logout();
  }
}
