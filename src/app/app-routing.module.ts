import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { FindMentorComponent } from './find-mentor/find-mentor.component';
import { FormPageComponent } from './form-page/form-page.component';
import { ChatPageComponent } from './chat-page/chat-page.component';

const routes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'find', component: FindMentorComponent},
  { path: 'form', component: FormPageComponent},
  { path: 'chat', component: ChatPageComponent},
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
