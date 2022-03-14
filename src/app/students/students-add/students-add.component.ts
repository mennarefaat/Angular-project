import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { StudentsService } from 'src/app/services/students.service';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent implements OnInit {
  newStudents:Students= new Students(0,"","","","")
  sub:Subscription|null=null;
  heroForm: FormGroup | undefined;
  hero: any;
  name=""
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
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4)
    ]),
  })
}

}
