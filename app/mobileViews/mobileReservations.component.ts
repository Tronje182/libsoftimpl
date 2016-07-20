import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookReservation } from '../data/bookReservation'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'bookreservations',
  templateUrl: 'app/mobileViews/reservations.component.html',
  providers: [DataService,AuthenticationService]
})

export class MobileReservationsComponent {
  books: BookReservation[];

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router) {}

  getReservations(){
    this.dataService.getBookReservations().then(books => this.books = books);
  }

  ngOnInit(){
    this._service.checkStaffPrivileges();

    this.getReservations();
  }

  onSelect(book: BookReservation){
    this.router.navigate(['/mobile/reservations/details', {studentid: book.student.id, bookid: book.book.id}]);
  }
}