import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';

import { AppRoutingModule } from './app-routing.module';

import { AdministratorModule } from './modules/administrator/administrator.module';
import { InstructorModule } from './modules/instructor/instructor.module';
import { UserModule } from './modules/user/user.module';

import { MessagesComponent } from './shared/components/messages/messages.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AdministratorModule,
    InstructorModule,
    UserModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
