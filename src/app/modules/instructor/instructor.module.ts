import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstructorRoutingModule } from './instructor-routing.module';

import { InstructorHomeComponent } from './components/instructor-home/instructor-home.component';

@NgModule({
  imports: [
    CommonModule,
    InstructorRoutingModule
  ],
  declarations: [
    InstructorHomeComponent
  ]
})
export class InstructorModule { }
