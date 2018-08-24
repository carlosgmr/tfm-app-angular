import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../../shared/services/layout.service';

@Component({
  selector: 'app-instructor-home',
  templateUrl: './instructor-home.component.html',
  styles: []
})
export class InstructorHomeComponent implements OnInit {
  title: string;

  constructor(
    private layoutService: LayoutService
  ) { }

  ngOnInit() {
    this.title = 'Panel de instructor';
    this.layoutService.currentTitle(this.title);
    this.layoutService.currentSection('');
  }
}
