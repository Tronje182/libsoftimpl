import { Component, OnInit } from '@angular/core';

import { BookLending } from '../data/bookLending';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { NoolsService } from '../services/nools.service';

import { Profile } from '../helper/profile'

@Component({
  selector: 'lent-books',
  templateUrl: 'app/desktopViews/lentbooks.component.html',
  providers: [DataService,AuthenticationService]
})

export class LentBooksComponent {
  bookLendings: BookLending[];
  selectedLending: BookLending;

  public profile = new Profile();

  constructor(private dataService: DataService,
  private _service:AuthenticationService,
  private flow: NoolsService) {}

  getLendings(){
    this.dataService.getLendings(this._service.getId()).then(bookLendings => this.bookLendings = bookLendings);
  }

  ngOnInit(){
    this._service.checkCredentials();
    this.getLendings();

     var session = this.flow.getSession();

      this.profile.setPlatformType('mobile');
      this.profile.setUserProfile('student');

      session.assert(this.profile);


      //now fire the rules
      session.match(function(err){
          if(err){
              console.error(err.stack);
          }else{
              console.log("done");
              console.log(this.profile);
              
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
}
