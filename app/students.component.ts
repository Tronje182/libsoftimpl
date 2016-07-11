import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Student } from './data/student'

import { DataService } from './data.service';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/students.component.html',
  providers: [DataService,AuthenticationService]
})

export class StudentsComponent {
  students: Student[];
  selectedStudent: Student;
  isDisabled: boolean;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router
    ) {}

  getStudents(){
    this.dataService.getStudents().then(students => this.students = students);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.isDisabled = true;
    this.getStudents();
  }

  onSelect(student: Student){
    if(this.selectedStudent == student){
      this.selectedStudent = undefined;
      this.isDisabled = true;
    }else{
      this.selectedStudent = student;
      this.isDisabled = false;
    }
  }

  issueBook(){
      this.router.navigate(['/lendingForm', {studentid: this.selectedStudent.id, studentfirstname:this.selectedStudent.firstname, studentlastname:this.selectedStudent.lastname, studentstatus:this.selectedStudent.status}]);
      console.log("issue book")
  }
}