import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import {EventsService} from 'src/app/events.service'
import { StudentsService } from 'src/app/students.service';
import { Events } from 'src/app/_models/events';
import { Students } from 'src/app/_models/students';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor(public eventServe:EventsService, public studentServe:StudentsService) { }
  eventDetailsId:number=0;
  eventEditId:number=0;
  eventDeletId=0
  events:Events[]=[];
  students:Students[]=[]
  sub:Subscription|null=null;
  // load(){
  //   this.eventServe.getAllEvents().subscribe(event=>this.events=event)
  // }

  ngOnInit(): void {
    this.eventServe.getAllEvents().subscribe(event=>this.events=event)
    this.studentServe.getAllStudents().subscribe(student=>this.students=student)
  }
  ngOnDestroy(): void {
    console.log("department destroyed");
    this.sub?.unsubscribe();
    //throw new Error('Method not implemented.');
  }

}
