import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsAddComponent } from './students-add/students-add.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { StudentsDeleteComponent } from './students-delete/students-delete.component';
import { StudentsEditComponent } from './students-edit/students-edit.component';
import { StudentsListComponent } from './students-list/students-list.component';
import { FormsModule } from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import {MenuItem} from 'primeng/api';  
import { RouterModule , Routes } from '@angular/router';

//student Routes
const routes:Routes=[
  {path:"",component:StudentsListComponent},
  {path:"edit/:id",component:StudentsEditComponent},
  {path:"details/:id",component:StudentsDetailsComponent},
  {path:"add",component:StudentsAddComponent},  
];




@NgModule({
  declarations: [
    StudentsAddComponent,
    StudentsDetailsComponent,
    StudentsDeleteComponent,
    StudentsEditComponent,
    StudentsListComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild(routes),FormsModule,CalendarModule,AccordionModule
  ],
  exports: [ 
    StudentsAddComponent,
    StudentsDetailsComponent,
    StudentsDeleteComponent,
    StudentsEditComponent,
    StudentsListComponent
  ]
})
export class StudentsModule { }
