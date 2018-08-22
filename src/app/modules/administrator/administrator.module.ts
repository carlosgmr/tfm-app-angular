import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdministratorRoutingModule } from './administrator-routing.module';
import { SharedModule } from '../../shared/shared.module';

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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdministratorRoutingModule,
    SharedModule
  ],
  declarations: [
    AdministratorHomeComponent,
    AdmistratorListingComponent,
    AdmistratorReadComponent,
    AdmistratorCreateComponent,
    AdmistratorUpdateComponent,
    AdmistratorDeleteComponent,
    InstructorListingComponent,
    InstructorReadComponent,
    InstructorCreateComponent,
    InstructorUpdateComponent,
    InstructorDeleteComponent,
    InstructorGroupComponent,
    UserListingComponent,
    UserReadComponent,
    UserCreateComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserGroupComponent,
    GroupListingComponent,
    GroupReadComponent,
    GroupCreateComponent,
    GroupUpdateComponent,
    GroupDeleteComponent,
    GroupInstructorComponent,
    GroupUserComponent
  ]
})
export class AdministratorModule { }
