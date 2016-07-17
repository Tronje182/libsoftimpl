import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../data/book'
import { Student } from '../data/student'
import { BookLending } from '../data/bookLending'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'lendingform',
  templateUrl: 'app/mobileViews/lendingform.component.html',
  providers: [DataService,AuthenticationService]
})

export class MobileLendingFormComponent {
  book: string
  student: string
  until: string
  untilDate: Date
  bookLending: BookLending
  bookObj: Book;

  private sub: any;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.untilDate = new Date();
    this.untilDate.setDate(this.untilDate.getDate() + 30);
    this.until = this.untilDate.getDate() + '.' + (this.untilDate.getMonth()+1) + '.' + this.untilDate.getFullYear();
  }

  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
      this.student = params['studentid'];
      this.dataService.getBookById(params['bookid']).then(b => this.bookObj = b).then(b => this.book = b.bookInfo.isbn);
    })
  }

  lendBook(){
    this.dataService.lendBook(this.bookObj, this.student, this.untilDate);
    this.book = "";
    this.student = "";
  }

}