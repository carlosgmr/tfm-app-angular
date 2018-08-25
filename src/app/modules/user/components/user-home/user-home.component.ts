import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styles: []
})
export class UserHomeComponent implements OnInit {
  title: string;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.title = 'Panel de usuario';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('');
  }
}
