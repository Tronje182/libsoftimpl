import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoginComponent } from './login.component';
import { DefaultComponent } from './default.component';
import { ActionComponent } from './action.component';

import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'my-content',
  providers: [AuthenticationService],
  template: `
      <div id="navbar" class="col-md-2">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="divLine" *ngIf="authService.isStudent()">
              <a href="\lentBooks">Lent Books</a>
            </li>
            <li class="divLine" *ngIf="authService.isStudent() || authService.isStaff()">
              <a href="\searchBooks">Search Books</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a href="\students">Search Students</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a href="\\reservations">View Reservations</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a href="\lendingForm">View Lending Form</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-10" style="margin-left:0;width:83.33332%">
        <router-outlet></router-outlet>
      </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})

export class ContentComponent {

    public authService: AuthenticationService;

    constructor(
      private _service:AuthenticationService){
          this.authService = _service;
      }
 
    ngOnInit(){
        console.log("My-Content init");
    }

    getName() {
        return this._service.getName()
    }
 
    logout() {
        this._service.logout();
    }
}
