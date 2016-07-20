import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../data/student'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'students',
  templateUrl: 'app/mobileViews/students.component.html',
  providers: [DataService,AuthenticationService]
})

export class MobileStudentsComponent {
  students: Student[];
  selectedStudent: Student;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router
    ) {}

  getStudents(){
    this.dataService.getStudents().then(students => this.students = students);
  }

  ngOnInit(){
    this._service.checkStaffPrivileges();

    this.getStudents();
  }

  onSelect(student: Student){
    this.router.navigate(['/mobile/students/details', {studentId:student.id}]);
  }
}