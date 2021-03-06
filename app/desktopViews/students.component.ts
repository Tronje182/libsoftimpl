import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from '../data/student';

import { StudentsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'students',
  templateUrl: 'app/desktopViews/students.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [StudentsPipe]
})

export class StudentsComponent {
  students: Student[];
  selectedStudent: Student;
  isDisabled: boolean;
  filterBy: string;

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

    this.isDisabled = true;
    this.getStudents();
  }

  onSelect(student: Student){
    if(this.selectedStudent === student){
      this.selectedStudent = undefined;
      this.isDisabled = true;
    }else{
      this.selectedStudent = student;
      this.isDisabled = false;
    }
  }

  viewDetails(){
      this.router.navigate(['/studentDetails', {studentid: this.selectedStudent.id}]);
      console.log('issue book');
  }
}