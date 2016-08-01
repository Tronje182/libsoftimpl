import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component } from '@angular/core';

import { LoginComponent } from './desktopViews/login.component';

import {AuthenticationService} from './services/authentication.service';


@Component({
  selector: 'my-app',
  providers: [AuthenticationService],
  template: `
    <div id="desktopViewContainter" class="container">
      <div id="headerBar" class="row divLine" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px; background-color:lightgray;">
          <a href="\" class="btn btn-link"><img src="./app/ressources/images/logo_transparent.png" alt="LibSoft" height="115" width="175"></a>
        </div>
        <div>
        </div>
      </div>
      <div class="row">

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

      </div>
    </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})

export class AppComponent {
    public authService: AuthenticationService;

    constructor( private _service: AuthenticationService ){
          this.authService = _service;
      }
}
