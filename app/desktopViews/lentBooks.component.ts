import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookLending } from '../data/bookLending'

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'my-lent-books',
  templateUrl: 'app/desktopViews/lentbooks.component.html',
  providers: [DataService,AuthenticationService]
})

export class LentBooksComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;

  constructor(private dataService: DataService,
  private _service:AuthenticationService) {}

  getLendings(){
    this.dataService.getLendings(this._service.getId()).then(bookLendings => this.bookLendings = bookLendings);    
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();
  }

  onSelect(bookLending: BookLending){
    if(this.selectedLending == bookLending){
      this.selectedLending = undefined;
    }else{
      this.selectedLending = bookLending;
    }
  }
}