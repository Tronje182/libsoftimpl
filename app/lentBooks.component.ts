import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookLending } from './data/bookLending'

import { DataService } from './data.service';

@Component({
  selector: 'my-lent-books',
  templateUrl: 'app/lentbooks.component.html',
  providers: [DataService]
})

export class LentBooksComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;

  constructor(private dataService: DataService) {}

  getLendings(){
    this.dataService.getLendings().then(bookLendings => this.bookLendings = bookLendings);
  }

  ngOnInit(){
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