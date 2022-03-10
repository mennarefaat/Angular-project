import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{ HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsModule } from './events/events.module';
import {StudentsModule} from './students/students.module';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { RouterModule, Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list/events-list.component';
import { EventsDetailsComponent } from './events/events-details/events-details.component';
import { EventsEditComponent } from './events/events-edit/events-edit.component';
import { EventsAddComponent } from './events/events-add/events-add.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';

const routes:Routes=[

  {path:"home",component:HomeComponent},
  // {path:"contact",component:ContactusComponent},
  // {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"events",component:EventsListComponent,children:
  [
    // {path:"details/:id",component:EventsDetailsComponent},
    // {path:"edit/:id",component:EventsEditComponent},

  ]},
  {path:"events/edit/:id",component:EventsEditComponent},
  {path:"events/details/:id",component:EventsDetailsComponent},
  {path:"events/add",component:EventsAddComponent},
  {path:"login",component:LoginComponent},
 


  // {path:"**",component:ErrorComponent},
  
];

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
    RouterModule.forRoot(routes),
 
    
  ],
  providers: [{provide:"baseUrl",useValue:"http://localhost:8080/"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
