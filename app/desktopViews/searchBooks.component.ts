import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';

import { Book } from '../data/book';

import { BooksPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/desktopViews/searchBooks.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [BooksPipe],
  directives: [NgClass]
})

export class SearchBooksComponent {
  books: Book[];
  selectedBook: Book;
  isDisabledIssueBook: boolean;
  isDisabledReturnBook: boolean;
  filterBy: string;

  public authService: AuthenticationService;

  constructor(private dataService: DataService,private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService,
    private flow: NoolsService) {
    this.authService = _service;
  }

  getLendings(){
    this.dataService.getBooks().then(books => this.books = books).then(books => this.findSelectedBook());
  }

  findSelectedBook(){
    if(this.selectedBook != undefined){
      this.selectedBook = this.books.find(books => books.id == this.selectedBook.id);
      if(this.selectedBook.status === true){
          this.isDisabledIssueBook = false;
          this.isDisabledReturnBook = true;
      }else{
          this.isDisabledIssueBook = true;
          this.isDisabledReturnBook= false;
      }
    }
  }

  ngOnInit(){
    this._service.checkCredentials();

    this.isDisabledIssueBook = true;
    this.isDisabledReturnBook = true;
    this.getLendings();

  }

  onSelect(book: Book){
    if(this.selectedBook === book){
      this.selectedBook = undefined;
      this.isDisabledIssueBook = true;
      this.isDisabledReturnBook = true;
    }else{
      if(book.status === true){
        this.isDisabledIssueBook = false;
        this.isDisabledReturnBook = true;
      }else{
        this.isDisabledIssueBook = true;
        this.isDisabledReturnBook= false;
      }
      this.selectedBook = book;
    }
  }

  issueBook(){
    this.router.navigate(['/lendingForm', {bookid:this.selectedBook.id}]);
  }

  returnBook(){
    this.dataService.returnBook(this.selectedBook.id);
    this.getLendings();
  }

  unselectBook(){
      this.selectedBook = undefined;
      this.isDisabledIssueBook = true;
      this.isDisabledReturnBook = true;
  }

  reserveBook(){
    this.dataService.reserveBook(this.selectedBook.id, this.authService.getId());
    this.getLendings();
  }
}
