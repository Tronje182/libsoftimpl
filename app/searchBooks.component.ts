import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './data/book'

import { DataService } from './data.service';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/searchBooks.component.html',
  providers: [DataService,AuthenticationService]
})

export class SearchBooksComponent {
  books: Book[];
  selectedBook: Book;
  isDisabledIssueBook: boolean;
  isDisabledReturnBook: boolean;

  public authService: AuthenticationService;

  constructor(private dataService: DataService,private _service:AuthenticationService,
    private router: Router) {
    this.authService = _service;
  }

  getLendings(){
    this.dataService.getBooks().then(books => this.books = books);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.isDisabledIssueBook = true;
    this.isDisabledReturnBook = true;
    this.getLendings();
  }

  onSelect(book: Book){
    if(this.selectedBook == book){
      this.selectedBook = undefined;
      this.isDisabledIssueBook = true;
      this.isDisabledReturnBook = true;
    }else{
      if(book.status == true){
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
  }
}