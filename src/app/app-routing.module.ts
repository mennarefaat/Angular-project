import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { LoginGuard } from './guards/login.guard';
import { LoginAdminGuard } from './guards/login-admin.guard';




const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"logout",component:LogoutComponent},
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"events",loadChildren:()=>import("./events/events.module").then(m=>m.EventsModule),canActivate:[LoginGuard]},
  {path:"students",loadChildren:()=>import("./students/students.module").then(m=>m.StudentsModule)},
  {path:"speakers",loadChildren:()=>import("./speakers/speakers.module").then(m=>m.SpeakersModule)},

];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
