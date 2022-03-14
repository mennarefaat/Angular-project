import { Component, OnInit, OnChanges, Input, SimpleChanges  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventsService } from 'src/app/services/events.service';
import { SpeakersService } from 'src/app/services/speakers.service';
import { StudentsService } from 'src/app/services/students.service';
import { Events } from 'src/app/_models/events';
import { Speakers } from 'src/app/_models/speakers';
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
  speaker:Speakers[]=[]
  constructor(public eventServe:EventsService, public ac:ActivatedRoute, public studentServe:StudentsService , public speakerServe:SpeakersService) { }
  ngOnChanges(changes: SimpleChanges): void {
    // this.eventServe.getEventsById(this.eventId).subscribe(id=>this.event=id) 
  }
  ngOnInit(): void {
  this.ac.params.subscribe(a=>{
    this.eventServe.getEventsById(a['id']).subscribe(
         a=>{this.event=a, console.log("ok")
         this.studentServe.getAllStudents().subscribe(student=>{this.student=student ,console.log(this.student)});
         this.speakerServe.getAllSpeakers().subscribe(speaker=>{this.speaker=speaker ,console.log(this.speaker)});
        }
        
        );
  })
}

}
