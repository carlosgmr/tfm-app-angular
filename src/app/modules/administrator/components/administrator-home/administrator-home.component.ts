import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-administrator-home',
  templateUrl: './administrator-home.component.html',
  styles: []
})
export class AdministratorHomeComponent implements OnInit {
  title: string;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.title = 'Panel de administrador';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('');
  }
}
