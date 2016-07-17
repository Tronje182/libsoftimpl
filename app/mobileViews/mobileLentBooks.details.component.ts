import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../data/book'
import { BookInfo } from '../data/bookInfo'
import { Student } from '../data/student'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'my-lent-books',
  templateUrl: 'app/mobileViews/lentbooks.component.details.html',
  providers: [DataService,AuthenticationService]
})

export class MobileLentBooksDetailsComponent {
  selectedBook: Book;
  selectedStudent: Student;
  selectedUntil: Date

  private sub: any;

  constructor(private dataService: DataService,
  private _service:AuthenticationService,
  private route: ActivatedRoute) {}

  ngOnInit(){
    this._service.checkCredentials();

    this.selectedBook = new Book(-1,false,new BookInfo('','',''));
    this.selectedStudent = new Student('','','',false);

    this.sub = this.route.params.subscribe(params => {
        this.dataService.getBookById(params['bookId']).then(b => this.selectedBook=b);
        this.dataService.getStudentById(params['studentId']).then(s => this.selectedStudent=s);
        this.selectedUntil = params['until'];
    })
  }


}