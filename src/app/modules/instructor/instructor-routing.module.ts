import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorAuthGuardService } from './services/instructor-auth-guard.service';
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

const routes: Routes = [
  { path: 'instructor', component: InstructorHomeComponent, canActivate: [InstructorAuthGuardService] },

  { path: 'instructor/group', component: GroupListingComponent, canActivate: [InstructorAuthGuardService] },
  { path: 'instructor/group/:id', component: GroupReadComponent, canActivate: [InstructorAuthGuardService] },

  { path: 'instructor/instructor/:id', component: InstructorReadComponent, canActivate: [InstructorAuthGuardService] },

  { path: 'instructor/user/:id', component: UserReadComponent, canActivate: [InstructorAuthGuardService] },
  {
    path: 'instructor/user/:idUser/questionary/:idQuestionary',
    component: UserQuestionaryComponent,
    canActivate: [InstructorAuthGuardService]
  },

  { path: 'instructor/questionary', component: QuestionaryListingComponent, canActivate: [InstructorAuthGuardService] },
  { path: 'instructor/questionary/create', component: QuestionaryCreateComponent, canActivate: [InstructorAuthGuardService] },
  { path: 'instructor/questionary/:id', component: QuestionaryReadComponent, canActivate: [InstructorAuthGuardService] },
  { path: 'instructor/questionary/:id/update', component: QuestionaryUpdateComponent, canActivate: [InstructorAuthGuardService] },
  { path: 'instructor/questionary/:id/delete', component: QuestionaryDeleteComponent, canActivate: [InstructorAuthGuardService] },
  {
    path: 'instructor/questionary/:id/update/questions',
    component: QuestionaryUpdateQuestionsComponent,
    canActivate: [InstructorAuthGuardService]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
