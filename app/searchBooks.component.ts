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

  constructor(private dataService: DataService,private _service:AuthenticationService) {}

  getLendings(){
    this.dataService.getBooks().then(books => this.books = books);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();
  }

  onSelect(book: Book){
    if(this.selectedBook == book){
      this.selectedBook = undefined;
    }else{
      this.selectedBook = book;
    }
  }
}