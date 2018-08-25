import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAuthGuardService } from './services/user-auth-guard.service';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { GroupListingComponent } from './components/group-listing/group-listing.component';
import { GroupReadComponent } from './components/group-read/group-read.component';
import { InstructorReadComponent } from './components/instructor-read/instructor-read.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserQuestionaryComponent } from './components/user-questionary/user-questionary.component';
import { QuestionaryListingComponent } from './components/questionary-listing/questionary-listing.component';
import { QuestionaryDoAttemptComponent } from './components/questionary-do-attempt/questionary-do-attempt.component';

const routes: Routes = [
  { path: 'user', component: UserHomeComponent, canActivate: [UserAuthGuardService] },

  { path: 'user/group', component: GroupListingComponent, canActivate: [UserAuthGuardService] },
  { path: 'user/group/:id', component: GroupReadComponent, canActivate: [UserAuthGuardService] },

  { path: 'user/instructor/:id', component: InstructorReadComponent, canActivate: [UserAuthGuardService] },

  { path: 'user/user/questionary/:id', component: UserQuestionaryComponent, canActivate: [UserAuthGuardService] },
  { path: 'user/user/:id', component: UserReadComponent, canActivate: [UserAuthGuardService] },

  { path: 'user/questionary', component: QuestionaryListingComponent, canActivate: [UserAuthGuardService] },
  { path: 'user/questionary/:id/do-attempt', component: QuestionaryDoAttemptComponent, canActivate: [UserAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
