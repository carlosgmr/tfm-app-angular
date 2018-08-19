import { Component } from '@angular/core';

import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor(
    public storageService: StorageService
  ) {}
}
