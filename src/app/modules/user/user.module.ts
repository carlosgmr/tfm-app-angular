import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { UserHomeComponent } from './components/user-home/user-home.component';
import { GroupListingComponent } from './components/group-listing/group-listing.component';
import { GroupReadComponent } from './components/group-read/group-read.component';
import { InstructorReadComponent } from './components/instructor-read/instructor-read.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserQuestionaryComponent } from './components/user-questionary/user-questionary.component';
import { QuestionaryListingComponent } from './components/questionary-listing/questionary-listing.component';
import { QuestionaryDoAttemptComponent } from './components/questionary-do-attempt/questionary-do-attempt.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
    SharedModule
  ],
  declarations: [
    UserHomeComponent,
    GroupListingComponent,
    GroupReadComponent,
    InstructorReadComponent,
    UserReadComponent,
    UserQuestionaryComponent,
    QuestionaryListingComponent,
    QuestionaryDoAttemptComponent
  ]
})
export class UserModule { }
