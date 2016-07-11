import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookReservation } from './data/bookReservation'

import { DataService } from './data.service';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'bookreservations',
  templateUrl: 'app/reservations.component.html',
  providers: [DataService,AuthenticationService]
})

export class ReservationsComponent {
  books: BookReservation[];
  selectedBook: BookReservation;
  isDisabled: boolean;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router) {}

  getReservations(){
    this.dataService.getBookReservations().then(books => this.books = books);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.isDisabled = true;
    this.getReservations();
  }

  onSelect(book: BookReservation){
    if(this.selectedBook == book){
      this.selectedBook = undefined;
      this.isDisabled = true;
    }else{
      this.selectedBook = book;
      this.isDisabled = false;
    }
  }

  issueBook(){
    this.router.navigate(['/lendingForm', {studentid: this.selectedBook.student.id, bookid:this.selectedBook.book.id}]);
  }
}