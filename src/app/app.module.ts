import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';
import { AdministratorModule } from './modules/administrator/administrator.module';
import { InstructorModule } from './modules/instructor/instructor.module';
import { UserModule } from './modules/user/user.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    AdministratorModule,
    InstructorModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
