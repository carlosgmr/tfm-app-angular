import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstructorAuthGuardService } from './services/instructor-auth-guard.service';
import { InstructorHomeComponent } from './components/instructor-home/instructor-home.component';

const routes: Routes = [
  { path: 'instructor', component: InstructorHomeComponent, canActivate: [InstructorAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
