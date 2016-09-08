import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgClass } from '@angular/common';
import { BaseComponent } from './base.component';

import { SearchComponent } from '../dynamicComponents/search.component'

import { Book } from '../data/book';

import { BooksPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'my-search-books',
  templateUrl: 'app/desktopViews/searchBooks.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [BooksPipe],
  directives: [NgClass, SearchComponent]
})

export class SearchBooksComponent extends BaseComponent{
  books: Book[];
  selectedBook: Book;
  isDisabledIssueBook: boolean;
  isDisabledReturnBook: boolean;
  advancedSearchSpace: Object;
  filterBy: string;

  public authService: AuthenticationService;

  constructor(private dataService: DataService,private _service:AuthenticationService,
    private router: Router,
    private profile: ProfileService, 
    private _resources: ResourceService) {
    super(profile);
    this.authService = _service;
    this.advancedSearchSpace = [{key: "bookInfo.isbn", title: "isbn"},
                                {key: "bookInfo.title", title: "title"},
                                {key: "bookInfo.author", title: "author"}];
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

  filterUpdated(val: Object){
    this.filterBy = JSON.stringify(val);
  }
}
