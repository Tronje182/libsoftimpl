import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { BookLending } from '../data/bookLending';

import { LentBooksPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { ProfileService } from '../services/profile.service';
import { ResourceService } from '../services/resource.service';

import { BaseComponent } from './base.component'
import { SearchComponent } from '../dynamicComponents/search.component'

@Component({
  selector: 'lent-books',
  templateUrl: 'app/desktopViews/lentbooks.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [LentBooksPipe],
  directives: [NgClass, SearchComponent]
})

export class LentBooksComponent extends BaseComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;
  advancedSearchSpace: Object;
  filterBy: string;

  constructor(private dataService: DataService,
  private _service:AuthenticationService,
  private profile: ProfileService,
  private _resources: ResourceService) {
    super(profile);
    this.advancedSearchSpace = [{key: "book.bookInfo.isbn", title: "bookIsbn"},
                                {key: "book.bookInfo.title", title: "bookTitle"},
                                {key: "student.id", title: "studentId"}];
  }

  getLendings(){
    this.dataService.getLendings(this._service.getId()).then(bookLendings => this.bookLendings = bookLendings);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();
  }

  onSelect(bookLending: BookLending){
    if(this.selectedLending === bookLending){
      this.selectedLending = undefined;
    }else{
      this.selectedLending = bookLending;
    }
  }

  unselectLending(){
    this.selectedLending = undefined;
  }

  filterUpdated(val: Object){
    this.filterBy = JSON.stringify(val);
  }
}
