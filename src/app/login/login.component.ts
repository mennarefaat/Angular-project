import { Component, OnInit } from '@angular/core';
import { AuthonticationService } from '../authontication.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = new User("","","");

  constructor(public authSer: AuthonticationService) { }
  login() {
    this.authSer.login(this.user).subscribe(
      a => {
        console.log(a);
        localStorage.setItem("token", (<any>a).token)
      }
    );
  }

  ngOnInit(): void {
  }

}
