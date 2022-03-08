import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { EventsService } from 'src/app/events.service';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit, OnChanges {
  value=Date;
  @Input() eventId=0
  event:Events =new Events(0,'','','',[''],[0])
  constructor(public eventService:EventsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['eventId'].isFirstChange()){
      this.eventService.getEventsById(this.eventId).subscribe(a=>this.event=a)

    }
    
  }
  save(){
    this.eventService.updateEvents(this.event).subscribe(a=>console.log(a));
  }
  ngOnInit(): void {
  }

}
