import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { BookReservation } from '../data/bookReservation';

import { ReservationsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'book-reservations',
  templateUrl: 'app/desktopViews/reservations.component.html',
  providers: [DataService,AuthenticationService],
  pipes:[ReservationsPipe],
  directives: [NgClass]
})

export class ReservationsComponent {
  books: BookReservation[];
  selectedBook: BookReservation;
  isDisabled: boolean;
  filterBy: string;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService,
    private flow: NoolsService) {}

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

  unselectReservation(){
    this.selectedBook = undefined;
    this.isDisabled = true;
  }

  issueBook(){
    this.router.navigate(['/lendingForm', {studentid: this.selectedBook.student.id, bookid:this.selectedBook.book.id}]);
  }
}
