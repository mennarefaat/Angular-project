import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"events",loadChildren:()=>import("./events/events.module").then(m=>m.EventsModule)},
  {path:"students",loadChildren:()=>import("./students/students.module").then(m=>m.StudentsModule)},

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
