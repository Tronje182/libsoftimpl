import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgClass } from '@angular/common';

import { LoginComponent } from './desktopViews/login.component';

import { AuthenticationService } from './services/authentication.service';
import { ProfileService } from './services/profile.service';

import { NoolsTestBarComponent } from './tests/noolstestBar'

import { NavigationComponent } from './dynamicComponents/navigation.component'

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

        <navigation-component [navItems]="profile.getProfile().displayProperties.navigation"></navigation-component>

        <div [ngClass]="profile.getProfile().displayProperties.routerOutletClass" style="margin-left:0;padding-right:0px;width:83.33332%">
          <router-outlet></router-outlet>
        </div>

      </div>
    </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES, NgClass, NoolsTestBarComponent, NavigationComponent]
})

export class AppComponent {
    public authService: AuthenticationService;

    constructor( private _service: AuthenticationService, 
    private profile: ProfileService ){
          this.authService = _service;
    }
}
