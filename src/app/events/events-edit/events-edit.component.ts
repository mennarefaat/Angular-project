import { Component, Input, OnInit,OnChanges, SimpleChanges } from '@angular/core';
import { EventsService } from 'src/app/events.service';
import { Events } from 'src/app/_models/events';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { ActivatedRoute } from '@angular/router';
import { StudentsService } from 'src/app/students.service'
import { Students } from 'src/app/_models/students';


@Component({
  selector: 'app-events-edit',
  templateUrl: './events-edit.component.html',
  styleUrls: ['./events-edit.component.css']
})
export class EventsEditComponent implements OnInit, OnChanges {
  value=Date;
  @Input() eventId=0
  sub:Subscription|null=null
  students:Students[]=[]
  event:Events =new Events(0,'','','',[''],0)
  constructor(public eventService:EventsService,public studentServece:StudentsService,  public router:Router, public ac:ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    // if(!changes['eventId'].isFirstChange()){
    //   this.eventService.getEventsById(this.eventId).subscribe(a=>this.event=a)

    // }
    
  }
  save(){
    this.eventService.updateEvents(this.event).subscribe(a=>console.log(a));
    this.router.navigate(['/events']);
  }
  ngOnInit(): void {
    this.ac.params.subscribe(a=>{
      this.eventService.getEventsById(a['id']).subscribe(
        d=>this.event=d);
    })
    this.studentServece.getAllStudents().subscribe(a=>this.students=a)
    
  }
  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

}
