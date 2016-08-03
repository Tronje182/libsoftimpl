import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { LoginComponent } from './desktopViews/login.component';

import {AuthenticationService} from './services/authentication.service';

import { Profile } from './helper/profile'
import { DisplayProperties } from './helper/displayProperties'

declare var nools: any;

@Component({
  selector: 'my-app',
  providers: [AuthenticationService],
  template: `
    <div id="desktopViewContainter" class="container"> <!-- headerBarClass: row divLine -->
      <div id="headerBar" [ngClass]="profile.displayProperties.headerBarClass" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px; background-color:lightgray;">
          <a href="\" class="btn btn-link"><img src="./app/ressources/images/logo_transparent.png" alt="LibSoft" height="115" width="175"></a>
        </div>
        <div>
        </div>
      </div>
      <div class="row">

        <nav [ngClass]="profile.displayProperties.navbarContainerClass"> <!-- sidebar-navbar col-md-2 | navbar navbar-default navbar-custom -->
          <div [ngClass]="profile.displayProperties.navbarWrapperClass"> <!-- sidebar-wrapper | container-fluid -->
            <div [ngClass]="profile.displayProperties.navbarHeaderClass"> <!-- hide this | navbar-header -->
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-nav"> <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a href="\" class="navbar-brand">LibSoft</a>
            </div>

            <div [ngClass]="profile.displayProperties.navbarCollapseClass" id="bs-nav"> <!-- nothing | navbar-collapse collapse -->
              <ul [ngClass]="profile.displayProperties.navbarItemListClass">        <!-- sidebar-nav | nav navbar-nav -->
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
        </nav>

        <div [ngClass]="profile.displayProperties.routerOutletClass" style="margin-left:0;padding-right:0px;width:83.33332%">
          <router-outlet></router-outlet>
        </div>

      </div>
    </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES, NgClass]
})

export class AppComponent {
    public authService: AuthenticationService;

    public profile = new Profile();

    
          public interval3Id = setInterval(
           console.log(this.profile)
          ,8000);

    constructor( private _service: AuthenticationService ){
          this.authService = _service;
    }

    public flow = nools.flow("ProfileEvaluation", function (flow) {
      console.log("flow");

      flow.rule("Platform Mobile", [Profile, "m", "m.getPlatformType() =~ /desktop/"], function (facts) {
          console.log(facts.m);
          facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');

          facts.m.displayProperties.headerBarClass = 'row divLine';
          facts.m.displayProperties.routerOutletClass = 'col-md-10';

          facts.m.displayProperties.navbarContainerClass = 'sidebar-navbar col-md-2';
          facts.m.displayProperties.navbarWrapperClass = 'sidebar-wrapper';
          facts.m.displayProperties.navbarHeaderClass = 'hideElement';
          facts.m.displayProperties.navbarCollapseClass = '';
          facts.m.displayProperties.navbarItemListClass = 'sidebar-nav';
          this.modify(facts.m);
          this.halt();
      });

      flow.rule("Platform Mobile", [Profile, "m", "m.getPlatformType() =~ /mobile/"], function (facts) {
          console.log(facts.m);
          facts.m.displayProperties.setTableClass('table table-inverse table-bordered table-hover');

          facts.m.displayProperties.headerBarClass = 'hideElement';
          facts.m.displayProperties.routerOutletClass = 'col-md-12';

          facts.m.displayProperties.navbarContainerClass = 'navbar navbar-default navbar-custom';
          facts.m.displayProperties.navbarWrapperClass = 'container-fluid';
          facts.m.displayProperties.navbarHeaderClass = 'navbar-header';
          facts.m.displayProperties.navbarCollapseClass = 'navbar-collapse collapse';
          facts.m.displayProperties.navbarItemListClass = 'nav navbar-nav';
          this.modify(facts.m);
          this.halt();
      });
    });
 
    ngOnInit() {
        
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
}
