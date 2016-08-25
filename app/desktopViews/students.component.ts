import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { SearchComponent } from '../dynamicComponents/search.component'

import { Student } from '../data/student';

import { StudentsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'students',
  templateUrl: 'app/desktopViews/students.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [StudentsPipe],
  directives: [NgClass, SearchComponent]
})

export class StudentsComponent {
  students: Student[];
  selectedStudent: Student;
  isDisabled: boolean;
  advancedSearchSpace: Object;
  filterBy: string;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService
    ) {
      this.advancedSearchSpace = [{key: "id", title: "Student ID"},
                                  {key: "firstname", title: "Firstname"},
                                  {key: "lastname", title: "Lastname"}];
    }

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

    if(this.profile.getProfile().displayProperties.isMobile){
      this.viewDetails();
    }
  }

  viewDetails(){
      this.router.navigate(['/studentDetails', {studentid: this.selectedStudent.id}]);
  }

  filterUpdated(val: Object){
    this.filterBy = JSON.stringify(val);
  }
}