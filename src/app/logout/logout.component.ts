import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from '../services/authontication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public router:Router, public authSer: AuthonticationService) { }

  ngOnInit(): void {
    localStorage.clear();
    this.authSer.isLogged=false;
    this.authSer.isAdmin=false;
    this.router.navigate(['/login']);
  }

}
