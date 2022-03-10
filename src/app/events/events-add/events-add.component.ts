import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { EventsService } from 'src/app/events.service';
import { StudentsService } from 'src/app/students.service';
import { Events } from 'src/app/_models/events';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.css']
})
export class EventsAddComponent implements OnInit {
  value=Date;
  newEvent:Events=new Events(0,"","","",[""],0);
  sub:Subscription|null=null;
  students:Students[]=[]

  save(){
    console.log(this.newEvent)
    this.eventServe.addEvents(this.newEvent).subscribe(
      a=>{
        console.log(a);
        this.router.navigate(['/events']);
      }
      //by code
    )
    // this.eventServe.addEvents(this.newEvent).subscribe(event => console.log(event))
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
 
  constructor(public eventServe:EventsService , public router:Router,public studentServece:StudentsService) { }

  ngOnInit(): void {
    this.studentServece.getAllStudents().subscribe(a=>this.students=a)
  }
  

}

