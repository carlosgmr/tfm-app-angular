import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministratorAuthGuardService } from './services/administrator-auth-guard.service';
import { AdministratorHomeComponent } from './components/administrator-home/administrator-home.component';
import { AdmistratorListingComponent } from './components/admistrator-listing/admistrator-listing.component';
import { AdmistratorReadComponent } from './components/admistrator-read/admistrator-read.component';
import { AdmistratorCreateComponent } from './components/admistrator-create/admistrator-create.component';
import { AdmistratorUpdateComponent } from './components/admistrator-update/admistrator-update.component';
import { AdmistratorDeleteComponent } from './components/admistrator-delete/admistrator-delete.component';

const routes: Routes = [
  { path: 'administrator', component: AdministratorHomeComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator', component: AdmistratorListingComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id', component: AdmistratorReadComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/create', component: AdmistratorCreateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id/update', component: AdmistratorUpdateComponent, canActivate: [AdministratorAuthGuardService] },
  { path: 'administrator/administrator/:id/delete', component: AdmistratorDeleteComponent, canActivate: [AdministratorAuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministratorRoutingModule { }
