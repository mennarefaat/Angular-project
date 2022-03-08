import { Component, OnInit } from '@angular/core';
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

  ngOnInit(): void {
  }
  load(){

    this.studentServe.getAllStudents().subscribe(student => {this.students=student})
  }
  
}
