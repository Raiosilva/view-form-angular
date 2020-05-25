import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnswerListComponent } from './answers/answer-list/answer-list.component';
import { AnswerNewComponent } from './answers/answer-new/answer-new.component';
import { FormEditComponent } from './forms/form-edit/form-edit.component';
import { FormListComponent } from './forms/form-list/form-list.component';
import { RegisterComponent } from './users/register/register.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './users/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './users/auth-guard.service';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forms', component: FormListComponent, canActivate: [AuthGuardService]},
  { path: 'forms/:id', component: FormEditComponent, canActivate: [AuthGuardService]},
  { path: 'forms/new', component: FormEditComponent, canActivate: [AuthGuardService]},
  { path: 'answers', component: AnswerNewComponent, canActivate: [AuthGuardService]},
  { path: 'answers/:id', component: AnswerListComponent, canActivate: [AuthGuardService]},
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
