import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import {StudentsModule} from './students/students.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EventsModule,
    HttpClientModule,
    StudentsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
