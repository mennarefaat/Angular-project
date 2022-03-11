import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import {StudentsModule} from './students/students.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { FormsModule } from '@angular/forms';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { LoggingInterceptor } from './interptors/logging.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    HttpClientModule,
    StudentsModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:LoggingInterceptor,multi:true},
    {provide:"baseUrl",useValue:"http://localhost:8080/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
