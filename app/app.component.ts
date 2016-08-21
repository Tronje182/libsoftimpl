import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { LoginComponent } from './desktopViews/login.component';

import { AuthenticationService } from './services/authentication.service';
import { NoolsService } from './services/nools.service';
import { ProfileService } from './services/profile.service';

import { NoolsTestBarComponent } from './tests/noolstestBar'

@Component({
  selector: 'my-app',
  providers: [AuthenticationService],
  template: `
    <noolstestbar></noolstestbar>
    <div id="desktopViewContainter" class="container"> 
      <div id="headerBar" [ngClass]="profile.getProfile().displayProperties.headerBarClass" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px;">
          <a href="\" class="btn btn-link"><img src="./app/ressources/images/logo_transparent.png" alt="LibSoft" height="115" width="175"></a>
        </div>
        <div>
        </div>
      </div>
      <div class="row">

        <nav [ngClass]="profile.getProfile().displayProperties.navbarContainerClass"> 
          <div [ngClass]="profile.getProfile().displayProperties.navbarWrapperClass"> 
            <div [ngClass]="profile.getProfile().displayProperties.navbarHeaderClass"> 
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-nav"> <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="\" class="navbar-brand">LibSoft</a>
            </div>

            <div [ngClass]="profile.getProfile().displayProperties.navbarCollapseClass" id="bs-nav">
              <ul [ngClass]="profile.getProfile().displayProperties.navbarItemListClass">
                <li class="divLine borderSecondary" *ngIf="authService.isStudent()">
                  <a href="\lentBooks" class="textPrimary">Lent Books</a>
                </li>
                <li class="divLine borderSecondary" *ngIf="authService.isStudent() || authService.isStaff()">
                  <a href="\searchBooks" class="textPrimary">Search Books</a>
                </li>
                <li class="divLine borderSecondary" *ngIf="authService.isStaff()">
                  <a href="\students" class="textPrimary">Search Students</a>
                </li>
                <li class="divLine borderSecondary" *ngIf="authService.isStaff()">
                  <a href="\\reservations" class="textPrimary">View Reservations</a>
                </li>
                <li class="divLine borderSecondary" *ngIf="authService.isStaff()">
                  <a href="\lendingForm" class="textPrimary">View Lending Form</a>
                </li>
              </ul>              
            </div>
          </div>
        </nav>

        <div [ngClass]="profile.getProfile().displayProperties.routerOutletClass" style="margin-left:0;padding-right:0px;width:83.33332%">
          <router-outlet></router-outlet>
        </div>

      </div>
    </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES, NgClass, NoolsTestBarComponent]
})

export class AppComponent {
    public authService: AuthenticationService;


    constructor( private _service: AuthenticationService, 
    private flow: NoolsService,
    private profile: ProfileService ){
          this.authService = _service;
    }
 
    ngOnInit() {
      var session = this.flow.getSession();
      session.assert(this.profile.getProfile());

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
}
