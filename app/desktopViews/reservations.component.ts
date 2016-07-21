import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookReservation } from '../data/bookReservation';

import { ReservationsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'book-reservations',
  templateUrl: 'app/desktopViews/reservations.component.html',
  providers: [DataService,AuthenticationService],
  pipes:[ReservationsPipe]
})

export class ReservationsComponent {
  books: BookReservation[];
  selectedBook: BookReservation;
  isDisabled: boolean;
  filterBy: string;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router) {}

  getReservations(){
    this.dataService.getBookReservations().then(books => this.books = books);
  }

  ngOnInit(){
    this._service.checkStaffPrivileges();

    this.isDisabled = true;
    this.getReservations();
  }

  onSelect(book: BookReservation){
    if(this.selectedBook === book){
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
