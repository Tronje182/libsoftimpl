import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { BookLending } from '../data/bookLending';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'lent-books',
  templateUrl: 'app/desktopViews/lentbooks.component.html',
  providers: [DataService,AuthenticationService],
  directives: [NgClass]
})

export class LentBooksComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;

  constructor(private dataService: DataService,
  private _service:AuthenticationService,
  private flow: NoolsService,
  private profile: ProfileService) {}

  getLendings(){
    this.dataService.getLendings(this._service.getId()).then(bookLendings => this.bookLendings = bookLendings);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();

    var session = this.flow.getSession();
    session.assert(this.profile.getProfile());

    //now fire the rules
    session.match(function(err){
        if(err){
            console.error(err.stack);
        }else{
            console.log("done");
            
        }
    })  
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
}
