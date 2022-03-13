import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthonticationService } from 'src/app/authontication.service';
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

  constructor(public eventServe:EventsService, public studentServe:StudentsService, public authSer:AuthonticationService) { }
  eventDetailsId:number=0;
  eventEditId:number=0;
  eventDeletId=0
  events:Events[]=[];
  students:Students[]=[]
  sub:Subscription|null=null;

  ngOnInit(): void {
    this.eventServe.getAllEvents().subscribe(event=>this.events=event)
    this.studentServe.getAllStudents().subscribe(student=>this.students=student)
    console.log(this.authSer.isLogged)
  }
  ngOnDestroy(): void {
    console.log("events destroyed");
    this.sub?.unsubscribe();
  }

}
