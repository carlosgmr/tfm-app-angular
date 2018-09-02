import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { FooterInfo } from '../../models/footer-info';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: []
})
export class FooterComponent implements OnInit {
  private appInfo = environment.app;
  public data: FooterInfo;

  constructor() { }

  ngOnInit() {
    this.data = new FooterInfo(
      this.appInfo.version,
      this.appInfo.copyright,
      this.appInfo.copyrightUrl,
      new Date()
    );
  }
}
