import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BookLending } from '../data/bookLending'

import { LentBooksPipe } from '../helper/myfilter.pipe';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service'

@Component({
  selector: 'my-lent-books',
  templateUrl: 'app/mobileViews/lentbooks.component.html',
  providers: [DataService,AuthenticationService],
  pipes: [LentBooksPipe]
})

export class MobileLentBooksComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;
  filterBy: string;

  constructor(private dataService: DataService,
  private _service:AuthenticationService,private router: Router) {}

  getLendings(){
    this.dataService.getLendings(this._service.getId()).then(bookLendings => this.bookLendings = bookLendings);    
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();
  }

  onSelect(bookLending: BookLending){
    this.router.navigate(['/mobile/lentBooks/details', {studentId:bookLending.student.id,bookId:bookLending.book.id,until:bookLending.until}]);
  }
}