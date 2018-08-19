import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './modules/login/components/login/login.component';

import { AdministratorHomeComponent } from './modules/administrator/components/administrator-home/administrator-home.component';
import { InstructorHomeComponent } from './modules/instructor/components/instructor-home/instructor-home.component';
import { UserHomeComponent } from './modules/user/components/user-home/user-home.component';

const routes: Routes = [
  /*{ path: '', redirectTo: '/login', pathMatch: 'full' },*/
  { path: 'login', component: LoginComponent },

  { path: 'administrator', component: AdministratorHomeComponent },
  { path: 'instructor', component: InstructorHomeComponent },
  { path: 'user', component: UserHomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
