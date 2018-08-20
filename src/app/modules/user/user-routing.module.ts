import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserAuthGuardService } from './services/user-auth-guard.service';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: 'user', component: UserHomeComponent, canActivate: [UserAuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
