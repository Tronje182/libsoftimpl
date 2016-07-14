import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoginComponent } from '../desktopViews/login.component';
import { DefaultComponent } from '../desktopViews/default.component';

import { AuthenticationService } from '../services/authentication.service'

import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'my-content',
  providers: [AuthenticationService],
  template: `
      <div id="navbar" class="col-md-2">
        <div id="sidebar-wrapper">
          <ul class="sidebar-nav">
            <li class="divLine" *ngIf="authService.isStudent()">
              <a *isDesktop href="\lentBooks">Lent Books</a>
              <a *isMobile href="\mobile\lentBooks">Lent Books</a>
            </li>
            <li class="divLine" *ngIf="authService.isStudent() || authService.isStaff()">
              <a *isDesktop href="\searchBooks">Search Books</a>
              <a *isMobile href="\mobile\searchBooks">Search Books</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a *isDesktop href="\students">Search Students</a>
              <a *isMobile href="\mobile\students">Search Students</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a *isDesktop href="\\reservations">View Reservations</a>
              <a *isMobile href="\mobile\\reservations">View Reservations</a>
            </li>
            <li class="divLine" *ngIf="authService.isStaff()">
              <a *isDesktop href="\lendingForm">View Lending Form</a>
              <a *isMobile href="\mobile\lendingForm">View Lending Form</a>
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
