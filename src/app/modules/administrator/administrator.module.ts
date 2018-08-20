import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdministratorRoutingModule } from './administrator-routing.module';

import { AdministratorHomeComponent } from './components/administrator-home/administrator-home.component';
import { AdmistratorListingComponent } from './components/admistrator-listing/admistrator-listing.component';
import { AdmistratorReadComponent } from './components/admistrator-read/admistrator-read.component';
import { AdmistratorCreateComponent } from './components/admistrator-create/admistrator-create.component';
import { AdmistratorUpdateComponent } from './components/admistrator-update/admistrator-update.component';
import { AdmistratorDeleteComponent } from './components/admistrator-delete/admistrator-delete.component';

@NgModule({
  imports: [
    CommonModule,
    AdministratorRoutingModule
  ],
  declarations: [
    AdministratorHomeComponent,
    AdmistratorListingComponent,
    AdmistratorReadComponent,
    AdmistratorCreateComponent,
    AdmistratorUpdateComponent,
    AdmistratorDeleteComponent
  ]
})
export class AdministratorModule { }
