import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/login/components/login/login.component';

import { AppRoutingModule } from './/app-routing.module';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AdministratorHomeComponent } from './modules/administrator/components/administrator-home/administrator-home.component';
import { InstructorHomeComponent } from './modules/instructor/components/instructor-home/instructor-home.component';
import { UserHomeComponent } from './modules/user/components/user-home/user-home.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    MessagesComponent,
    AdministratorHomeComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    InstructorHomeComponent,
    UserHomeComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
