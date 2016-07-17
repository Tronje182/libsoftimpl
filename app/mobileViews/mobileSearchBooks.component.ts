import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Book } from '../data/book'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/mobileViews/searchBooks.component.html',
  providers: [DataService,AuthenticationService]
})

export class MobileSearchBooksComponent {
  books: Book[];

  public authService: AuthenticationService;

  constructor(private dataService: DataService,private _service:AuthenticationService,
    private router: Router) {
    this.authService = _service;
  }

  getLendings(){
    this.dataService.getBooks().then(books => this.books = books).then(b => console.log(b));
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();
  }

  onSelect(book: Book){
    this.router.navigate(['/mobile/searchBooks/details', {bookId:book.id}]);
  }
}