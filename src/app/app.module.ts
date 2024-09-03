import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CommunityPageComponent } from './community-page/community-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { FormPageComponent } from './form-page/form-page.component';
import { FindMentorComponent } from './find-mentor/find-mentor.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainPageComponent,
    CommunityPageComponent,
    AdminPageComponent,
    ProfilePageComponent,
    ChatPageComponent,
    FormPageComponent,
    FindMentorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
