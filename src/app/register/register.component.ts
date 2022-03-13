import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public router:Router) { }
  asStudent(){
    this.router.navigate(['/students/add']);
  }
  asSpeaker(){
    this.router.navigate(['/speakers/add']);
  }

  ngOnInit(): void {
  }

}
