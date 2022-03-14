import { Component, Input, OnInit ,OnChanges, SimpleChanges} from '@angular/core';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-events-delete',
  templateUrl: './events-delete.component.html',
  styleUrls: ['./events-delete.component.css']
})
export class EventsDeleteComponent implements OnInit, OnChanges{
  @Input() eventId:number = 0;

  constructor(public eventService:EventsService) { }
  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['eventId'].isFirstChange()){
      if(confirm("Are you sure to delete ")){

        this.eventService.deleteEvents(this.eventId).subscribe(a=> {console.log(a)})
      }
  }}

  ngOnInit(): void {
  }

}
