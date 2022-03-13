import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { StudentsService } from 'src/app/students.service';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  newStudents:Students= new Students(0,"","","","")
  sub:Subscription|null=null;
  constructor(public router:Router,public studentServece:StudentsService) { }

  save(){
    this.studentServece.addStudents(this.newStudents).subscribe(
      a=>{
        console.log(a);
        this.router.navigate(['/students']);
      }
    )
  }
  ngOnInit(): void {
  }

}
