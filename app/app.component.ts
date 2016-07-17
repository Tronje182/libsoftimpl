import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component } from '@angular/core';

import { LoginComponent } from './desktopViews/login.component';

import {AuthenticationService} from './services/authentication.service';


@Component({
  selector: 'my-app',
  providers: [AuthenticationService],
  template: `
    <div *isDesktop id="desktopViewContainter" class="container">
      <div id="headerBar" class="row divLine" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px; background-color:lightgray;">
          <a href="\" class="btn btn-link"><h1>LibSoft</h1></a>
        </div>
        <div>
        </div>
      </div>
      <div class="row">

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

      </div>
    </div>

    <div *isMobile id="mobileViewContainter" class="container">

      <nav class="navbar navbar-default navbar-custom ">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-nav"> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>

            </button>
          <a href="\" class="navbar-brand">LibSoft</a>
          </div>
          <div class="navbar-collapse collapse" id="bs-nav">
            <ul class="nav navbar-nav">
              <li class="divLine" *ngIf="authService.isStudent()">
                <a href="\mobile\\lentBooks">Lent Books</a>
              </li>
              <li class="divLine" *ngIf="authService.isStudent() || authService.isStaff()">
                <a href="\mobile\\searchBooks">Search Books</a>
              </li>
              <li class="divLine" *ngIf="authService.isStaff()">
                <a href="\mobile\\students">Search Students</a>
              </li>
              <li class="divLine" *ngIf="authService.isStaff()">
                <a href="\mobile\\reservations">View Reservations</a>
              </li>
              <li class="divLine" *ngIf="authService.isStaff()">
                <a href="\mobile\lendingForm">View Lending Form</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="row">
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
