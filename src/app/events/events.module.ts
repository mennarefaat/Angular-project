import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list/events-list.component';
import { EventsAddComponent } from './events-add/events-add.component';
import { EventsDetailsComponent } from './events-details/events-details.component';
import { EventsDeleteComponent } from './events-delete/events-delete.component';
import { EventsEditComponent } from './events-edit/events-edit.component';
import { FormsModule } from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    EventsListComponent,
    EventsAddComponent,
    EventsDetailsComponent,
    EventsDeleteComponent,
    EventsEditComponent,
 
  ],
  imports: [
    CommonModule,RouterModule,FormsModule,CalendarModule,AccordionModule,BrowserModule,BrowserAnimationsModule
  ],
  exports: [
    EventsListComponent,
    EventsAddComponent,
    EventsDetailsComponent,
    EventsDeleteComponent,
    EventsEditComponent
  ]
})
export class EventsModule { }
