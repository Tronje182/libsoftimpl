import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Book } from '../data/book'
import { BookInfo } from '../data/bookInfo'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/mobileViews/searchBooks.component.details.html',
  providers: [DataService,AuthenticationService]
})

export class MobileSearchBooksDetailsComponent {
  books: Book[];
  selectedBook: Book;

  private sub: any;
  public authService: AuthenticationService;

  constructor(private dataService: DataService,private _service:AuthenticationService,
    private route: ActivatedRoute, private router: Router) {
    this.authService = _service;
  }

  ngOnInit(){
    this._service.checkCredentials();

    this.updateDetails();
  }

  updateDetails(){
    this.selectedBook = new Book(-1,false,new BookInfo('','',''));

    this.sub = this.route.params.subscribe(params => {
        this.dataService.getBookById(params['bookId']).then(b => this.selectedBook = b);
    })
  }

  issueBook(){
    this.router.navigate(['/mobile/lendingForm', {bookid:this.selectedBook.id}]);
    this.updateDetails();
  }

  returnBook(){
    this.dataService.returnBook(this.selectedBook.id);
    this.updateDetails();
  }

  reserveBook(){
    this.dataService.reserveBook(this.selectedBook.id, this.authService.getId());
    this.updateDetails();
  }
}