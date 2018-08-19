import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  private appInfo = environment.app;
  public data: object = null;

  constructor() { }

  ngOnInit() {
    this.data = {
      appVersion: this.appInfo.version,
      appCopyright: this.appInfo.copyright,
      appCopyrightUrl: this.appInfo.copyrightUrl,
      now: new Date()
    };
  }
}
