import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speakers } from './_models/speakers';

@Injectable({
  providedIn: 'root'
})
export class SpeakersService {

  baseurl:string="http://localhost:8080/speakers/";

  getAllSpeakers(){
      return this.http.get<Speakers[]>(this.baseurl);
  }
  getSpeakersById(id:number){
    return this.http.get<Speakers>(this.baseurl+id);
  }
  addSpeakers(speaker:Speakers){
    return this.http.post<Speakers>(this.baseurl,speaker);
  }
  updateSpeakers(speaker:Speakers){
    return this.http.put<Speakers>(this.baseurl+speaker._id,speaker);
  }
  deleteSpeakers(id:number){
    return this.http.delete<Speakers>(this.baseurl+id);
  }

  constructor(public http:HttpClient) { }
}
