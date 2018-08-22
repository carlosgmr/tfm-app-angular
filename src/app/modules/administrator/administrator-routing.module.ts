import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorAuthGuardService } from './services/administrator-auth-guard.service';
import { AdministratorHomeComponent } from './components/administrator-home/administrator-home.component';
import { AdmistratorListingComponent } from './components/admistrator-listing/admistrator-listing.component';
import { AdmistratorReadComponent } from './components/admistrator-read/admistrator-read.component';
import { AdmistratorCreateComponent } from './components/admistrator-create/admistrator-create.component';
import { AdmistratorUpdateComponent } from './components/admistrator-update/admistrator-update.component';
import { AdmistratorDeleteComponent } from './components/admistrator-delete/admistrator-delete.component';
import { InstructorListingComponent } from './components/instructor-listing/instructor-listing.component';
import { InstructorReadComponent } from './components/instructor-read/instructor-read.component';
import { InstructorCreateComponent } from './components/instructor-create/instructor-create.component';
import { InstructorUpdateComponent } from './components/instructor-update/instructor-update.component';
import { InstructorDeleteComponent } from './components/instructor-delete/instructor-delete.component';
import { InstructorGroupComponent } from './components/instructor-group/instructor-group.component';
import { UserListingComponent } from './components/user-listing/user-listing.component';
import { UserReadComponent } from './components/user-read/user-read.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { GroupListingComponent } from './components/group-listing/group-listing.component';
import { GroupReadComponent } from './components/group-read/group-read.component';
import { GroupCreateComponent } from './components/group-create/group-create.component';
import { GroupUpdateComponent } from './components/group-update/group-update.component';
import { GroupDeleteComponent } from './components/group-delete/group-delete.component';
import { GroupInstructorComponent } from './components/group-instructor/group-instructor.component';
import { GroupUserComponent } from './components/group-user/group-user.component';

const routes: Routes = [
  { path: 'administrator', component: AdministratorHomeComponent, canActivate: [AdministratorAuthGuardService] },

  { path: 'administrator/administrator', component: AdmistratorListingComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/create', component: AdmistratorCreateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id', component: AdmistratorReadComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id/update', component: AdmistratorUpdateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id/delete', component: AdmistratorDeleteComponent, canActivate: [AdministratorAuthGuardService] },

  { path: 'administrator/instructor', component: InstructorListingComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/instructor/create', component: InstructorCreateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/instructor/:id', component: InstructorReadComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/instructor/:id/update', component: InstructorUpdateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/instructor/:id/delete', component: InstructorDeleteComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/instructor/:id/group', component: InstructorGroupComponent, canActivate: [AdministratorAuthGuardService] },

  { path: 'administrator/user', component: UserListingComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/user/create', component: UserCreateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/user/:id', component: UserReadComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/user/:id/update', component: UserUpdateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/user/:id/delete', component: UserDeleteComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/user/:id/group', component: UserGroupComponent, canActivate: [AdministratorAuthGuardService] },

  { path: 'administrator/group', component: GroupListingComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/create', component: GroupCreateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/:id', component: GroupReadComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/:id/update', component: GroupUpdateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/:id/delete', component: GroupDeleteComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/:id/instructor', component: GroupInstructorComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/group/:id/user', component: GroupUserComponent, canActivate: [AdministratorAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
