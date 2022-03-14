import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../_models/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  baseurl:string="http://localhost:8080/students/";

  getAllStudents(){
      return this.http.get<Students[]>(this.baseurl);
  }
  getStudentsById(id:number){
    return this.http.get<Students>(this.baseurl+id);
  }
  addStudents(student:Students){
    return this.http.post<Students>(this.baseurl,student);
  }
  updateStudents(student:Students){
    return this.http.put<Students>(this.baseurl+student._id,student);
  }
  deleteStudents(id:number){
    return this.http.delete<Students>(this.baseurl+id);
  }

  constructor(public http:HttpClient) { }
}

