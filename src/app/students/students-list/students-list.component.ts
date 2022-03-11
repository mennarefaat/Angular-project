import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { StudentsService } from 'src/app/students.service';
import { Students } from 'src/app/_models/students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  constructor(public studentServe:StudentsService) { }
  studentDetailsId=0
  studentEditId=0
  studentDeleteId=0
  students:Students[]=[]
  sub:Subscription|null=null;

  ngOnInit(): void {
    this.studentServe.getAllStudents().subscribe(student => {this.students=student})
  }

  ngOnDestroy(): void {
    console.log("students destroyed");
    this.sub?.unsubscribe();
  }
}
