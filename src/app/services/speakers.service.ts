import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Speakers } from '../_models/speakers';

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
  addSpeakers(speaker:Speakers,file:File){
    let frm:FormData=new FormData();//setting enctype : multipart/formdata
    frm.append("_id",speaker._id.toString());
    frm.append("fullName",speaker.fullName);
    frm.append("Email",speaker.Email);
    frm.append("password",speaker.password);
    frm.append("image",file,file.name);
    frm.append("Address",speaker.Address);
    frm.append("role",speaker.role);
    return this.http.post<Speakers>(this.baseurl,frm);

  }
  updateSpeakers(speaker:Speakers){
    return this.http.put<Speakers>(this.baseurl+speaker._id,speaker);
  }
  deleteSpeakers(id:number){
    return this.http.delete<Speakers>(this.baseurl+id);
  }

  constructor(public http:HttpClient) { }
}
