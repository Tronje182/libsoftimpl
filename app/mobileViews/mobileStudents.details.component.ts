import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../data/book'
import { Student } from '../data/student'
import { BookLending } from '../data/bookLending'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'studentdetails',
  templateUrl: 'app/mobileViews/student.component.details.html',
  providers: [DataService,AuthenticationService]
})

export class MobileStudentDetailsComponent {
  book: string
  studentId: string
  student: Student
  until: string
  untilDate: Date
  bookLendings: BookLending[]

  private sub: any;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private route: ActivatedRoute
  ) {
      this.student = new Student("","","",false);
  }

  ngOnInit(){
    this._service.checkStaffPrivileges();

    this.sub = this.route.params.subscribe(params => {
      this.studentId = params['studentId'];
      this.dataService.getStudentById(this.studentId).then(s => this.student = s);
      this.dataService.getLendings(this.studentId).then(l => this.bookLendings = l);
    })
  }
}