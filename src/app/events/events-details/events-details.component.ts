import { Component, OnInit, OnChanges, Input, SimpleChanges  } from '@angular/core';
import { EventsService } from 'src/app/events.service';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit, OnChanges {
  @Input() eventId:number=0;
  event:Events|null=null;
  
  constructor(public eventServe:EventsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    this.eventServe.getEventsById(this.eventId).subscribe(id=>this.event=id)
    console.log(this.event)
   
  }

  ngOnInit(): void {
  }

}
