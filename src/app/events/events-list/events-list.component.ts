import { Component, OnInit } from '@angular/core';
import {EventsService} from 'src/app/events.service'
import { Events } from 'src/app/_models/events';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  constructor(public eventServe:EventsService) { }
  eventDetailsId:number=0;
  eventEditId:number=0;
  eventDeletId=0
  events:Events[]=[];
  load(){
    this.eventServe.getAllEvents().subscribe(event=>this.events=event)
  }

  ngOnInit(): void {
  }

}
