import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { Student } from '../data/student';

import { StudentsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'students',
  templateUrl: 'app/desktopViews/students.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [StudentsPipe],
  directives: [NgClass]
})

export class StudentsComponent {
  students: Student[];
  selectedStudent: Student;
  isDisabled: boolean;
  filterBy: string;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService,
    private flow: NoolsService
    ) {}

  getStudents(){
    this.dataService.getStudents().then(students => this.students = students);
  }

  ngOnInit(){
    this._service.checkStaffPrivileges();

    this.isDisabled = true;
    this.getStudents();

    var session = this.flow.getSession();
    session.assert(this.profile.getProfile());

    //now fire the rules
    session.match(function(err){
        if(err){
            console.error(err.stack);
        }else{
            console.log("done");
            
        }
    }) 
  }

  onSelect(student: Student){
    if(this.selectedStudent === student){
      this.selectedStudent = undefined;
      this.isDisabled = true;
    }else{
      this.selectedStudent = student;
      this.isDisabled = false;
    }

    if(this.profile.getProfile().displayProperties.isMobile){
      this.viewDetails();
    }
  }

  viewDetails(){
      this.router.navigate(['/studentDetails', {studentid: this.selectedStudent.id}]);
      console.log('issue book');
  }
}