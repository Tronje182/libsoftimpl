import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { BaseComponent } from './base.component';

import { BookReservation } from '../data/bookReservation';

import { ReservationsPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';
import { ResourceService } from '../services/resource.service';

import { SearchComponent } from '../dynamicComponents/search.component'

@Component({
  selector: 'book-reservations',
  templateUrl: 'app/desktopViews/reservations.component.html',
  providers: [DataService,AuthenticationService],
  pipes:[ReservationsPipe],
  directives: [NgClass, SearchComponent]
})

export class ReservationsComponent extends BaseComponent {
  books: BookReservation[];
  selectedBook: BookReservation;
  isDisabled: boolean;
  advancedSearchSpace: Object;
  filterBy: string;

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService, 
    private resources: ResourceService) {
      super(profile);
      this.advancedSearchSpace = [{key:"book.bookInfo.isbn", title:"isbn"},
                                  {key:"book.bookInfo.title", title:"title"},
                                  {key:"book.bookInfo.title", title:"author"},
                                  {key:"student.id",title:"studentID"}];
    }

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

  filterUpdated(val: Object){
    this.filterBy = JSON.stringify(val);
  }
}
