import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InstructorRoutingModule } from './instructor-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { InstructorHomeComponent } from './components/instructor-home/instructor-home.component';
import { GroupListingComponent } from './components/group-listing/group-listing.component';
import { GroupReadComponent } from './components/group-read/group-read.component';
import { InstructorReadComponent } from './components/instructor-read/instructor-read.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserQuestionaryComponent } from './components/user-questionary/user-questionary.component';
import { QuestionaryListingComponent } from './components/questionary-listing/questionary-listing.component';
import { QuestionaryReadComponent } from './components/questionary-read/questionary-read.component';
import { QuestionaryCreateComponent } from './components/questionary-create/questionary-create.component';
import { QuestionaryUpdateComponent } from './components/questionary-update/questionary-update.component';
import { QuestionaryDeleteComponent } from './components/questionary-delete/questionary-delete.component';
import { QuestionaryUpdateQuestionsComponent } from './components/questionary-update-questions/questionary-update-questions.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    InstructorRoutingModule,
    SharedModule
  ],
  declarations: [
    InstructorHomeComponent,
    GroupListingComponent,
    GroupReadComponent,
    InstructorReadComponent,
    UserReadComponent,
    UserQuestionaryComponent,
    QuestionaryListingComponent,
    QuestionaryReadComponent,
    QuestionaryCreateComponent,
    QuestionaryUpdateComponent,
    QuestionaryDeleteComponent,
    QuestionaryUpdateQuestionsComponent
  ]
})
export class InstructorModule { }
