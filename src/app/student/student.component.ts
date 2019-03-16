import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  studentId: number = 10;
  studentStatus = 'absent';

  getStudentStatus() {
    return this.studentStatus;
  }

  constructor() {
  this.studentStatus = Math.random() > 0.5 ? 'present' : 'absent';
  }

  getColor() {
    return this.studentStatus === 'present' ? 'green' : 'red';
  }
  ngOnInit() {
  }

}
