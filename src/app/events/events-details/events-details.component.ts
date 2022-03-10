import { Component, OnInit, OnChanges, Input, SimpleChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/events.service';
import { StudentsService } from 'src/app/students.service';
import { Events } from 'src/app/_models/events';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit, OnChanges {
  eventId:number=0;
  event:Events=new Events(0,'','','',[''],0);
  student:Students[]=[]
  constructor(public eventServe:EventsService, public ac:ActivatedRoute, public studentServe:StudentsService ) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.eventServe.getEventsById(this.eventId).subscribe(id=>this.event=id) 
  }
  ngOnInit(): void {
  this.ac.params.subscribe(a=>{
    this.eventServe.getEventsById(a['id']).subscribe(
         a=>{this.event=a, console.log("ok")
         this.studentServe.getAllStudents().subscribe(student=>{this.student=student ,console.log(this.student)});
        }
        
        );
  })
}

}
