import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  allowNewStudent = false;
  studentCreationStatus = 'No Student was added';
  studentAdded = false;
  students = ['August Bernoulli', 'Nicolas Bourbakii']
  constructor() {
    setTimeout(() => {
      this.allowNewStudent = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateStudent() {
  this.studentCreationStatus = "Student was added. His/Her name is: " + this.studentName;"";
  this.students.push('this.studentName');
  this.studentAdded = true;
  }

  studentName = 'Vasiliy Pupkin';
  onUpdateStudentName(event: Event) {
    //console.log(event);
    this.studentName = (<HTMLInputElement>event.target).value;
  }
}
