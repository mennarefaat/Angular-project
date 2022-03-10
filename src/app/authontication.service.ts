import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthonticationService {
  login(user:User){
    return this.http.post(this.baseurl,user);
  }

  constructor(public http:HttpClient,@Inject("baseUrl") public baseurl:string ) {
    this.baseurl+="login/";
   }
}
