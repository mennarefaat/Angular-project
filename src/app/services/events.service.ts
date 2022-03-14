import { Injectable } from '@angular/core';
import { Events } from '../_models/events';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  baseurl:string="http://localhost:8080/events/";

  getAllEvents(){
      return this.http.get<Events[]>(this.baseurl);
  }
  getEventsById(id:number){
    return this.http.get<Events>(this.baseurl+id);
  }
  addEvents(event:Events){
    return this.http.post<Events>(this.baseurl,event);
  }
  updateEvents(event:Events){
    return this.http.put<Events>(this.baseurl+event._id,event);
  }
  deleteEvents(id:number){
    return this.http.delete<Events>(this.baseurl+id);
  }

  constructor(public http:HttpClient) { }
}
