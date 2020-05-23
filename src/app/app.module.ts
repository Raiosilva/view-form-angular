import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';
import { MaterializeModule } from 'ng2-materialize';
import { MaterialModule } from './material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    // ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    HttpClientModule,
    MaterializeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [

  ]
})
export class AppModule { }
