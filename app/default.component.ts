import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  template: `
    <div>
        <h3>Welcome to Libsoft!</h3>
    <div>
    <div>
        LibSoft is a software application for students and staff members of the library of the Paderborn University.
    </div>
  `
})

export class DefaultComponent {

    constructor(
      private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
        console.log("test");
    }
 
    logout() {
        this._service.logout();
    }
 }