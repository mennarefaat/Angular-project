import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/events.service';
import { Events } from 'src/app/_models/events';

@Component({
  selector: 'app-events-add',
  templateUrl: './events-add.component.html',
  styleUrls: ['./events-add.component.css']
})
export class EventsAddComponent implements OnInit {
  value=Date;
  newEvent:Events=new Events(0,"","","",[""],[0]);
  save(){
    console.log(this.newEvent._id)
    this.eventServe.addEvents(this.newEvent).subscribe(event => console.log(event))
  }
 
  constructor(public eventServe:EventsService) { }

  ngOnInit(): void {
  }
  

}

