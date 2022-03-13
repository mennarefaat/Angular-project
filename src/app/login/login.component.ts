import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthonticationService } from '../authontication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User("","","");

  constructor( public router:Router, public authSer: AuthonticationService) { }
  login() {
    this.authSer.login(this.user).subscribe(
      a => {
        console.log(a);
        this.router.navigate(['/events']);
        localStorage.setItem("token", (<any>a).token);
        if(this.user.role=="admin"){
          console.log(this.user.role)
          this.authSer.isAdmin=true
          this.authSer.isLogged=true
        }
      }
    );
  }

  ngOnInit(): void {
  }

}
