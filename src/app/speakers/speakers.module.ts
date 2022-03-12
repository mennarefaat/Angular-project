import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersListComponent } from './speakers-list/speakers-list.component';
import { SpeakersAddComponent } from './speakers-add/speakers-add.component';
import { SpeakersDetailsComponent } from './speakers-details/speakers-details.component';
import { SpeakersDeleteComponent } from './speakers-delete/speakers-delete.component';
import { SpeakersEditComponent } from './speakers-edit/speakers-edit.component';
import { FormsModule } from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import { RouterModule , Routes } from '@angular/router';



//speakers routes
const routes:Routes=[
  {path:"",component:SpeakersListComponent},
  {path:"edit/:id",component:SpeakersEditComponent},
  {path:"details/:id",component:SpeakersDetailsComponent},
  {path:"add",component:SpeakersAddComponent},  
];



@NgModule({
  declarations: [
    SpeakersListComponent,
    SpeakersAddComponent,
    SpeakersDetailsComponent,
    SpeakersDeleteComponent,
    SpeakersEditComponent
  ],
  exports: [
    SpeakersListComponent,
    SpeakersAddComponent,
    SpeakersDetailsComponent,
    SpeakersDeleteComponent,
    SpeakersEditComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,CalendarModule,AccordionModule
  ]
})
export class SpeakersModule { }
