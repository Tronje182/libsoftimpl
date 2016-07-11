import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from './data/book'

import { DataService } from './data.service';

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/searchBooks.component.html',
  providers: [DataService]
})

export class SearchBooksComponent {
  books: Book[];
  selectedBook: Book;

  constructor(private dataService: DataService) {}

  getLendings(){
    this.dataService.getBooks().then(books => this.books = books);
  }

  ngOnInit(){
    this.getLendings();
    console.log("get lendings")
  }

  onSelect(book: Book){
    if(this.selectedBook == book){
      this.selectedBook = undefined;
    }else{
      this.selectedBook = book;
    }
  }
}