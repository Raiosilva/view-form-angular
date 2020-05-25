import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { MaterializeModule } from 'ng2-materialize';
import { MaterialModule } from './material.module';

import { AuthInterceptor } from './users/auth-interceptor';
import { UsersModule } from './users/users.module';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    HttpClientModule,
    UsersModule.forRoot(),
    MaterializeModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule { }
