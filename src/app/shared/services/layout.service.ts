import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private appName: string = environment.app.name;
  observableSection: BehaviorSubject<string>;

  constructor(
    private titleService: Title
  ) {
    this.observableSection = new BehaviorSubject<string>('');
  }

  currentSection(section: string) {
    this.observableSection.next(section);
  }

  currentTitle(title: string) {
    this.titleService.setTitle(this.appName + ' | ' + title);
  }
}
