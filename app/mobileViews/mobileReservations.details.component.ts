import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../data/book'
import { Student } from '../data/student'
import { BookInfo } from '../data/bookInfo'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'studentdetails',
  templateUrl: 'app/mobileViews/reservations.component.details.html',
  providers: [DataService,AuthenticationService]
})

export class MobileReservationsDetailsComponent {
  book:Book;
  student:Student;

  private sub: any;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private route: ActivatedRoute,
    private router: Router
  ) {
      this.student = new Student("","","",false);
      this.book = new Book(-1,false,new BookInfo("","",""));
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      var studentid = params['studentid'];
      var bookid = params['bookid'];
      this.dataService.getStudentById(studentid).then(s => this.student = s);
      this.dataService.getBookById(bookid).then(b => this.book = b);
    })
  }

  issueBook(){
    this.router.navigate(['/mobile/lendingForm', {studentid: this.student.id, bookid:this.book.id}]);
  }
}