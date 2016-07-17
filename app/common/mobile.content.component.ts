import { Component }          from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

import { LoginComponent } from '../desktopViews/login.component';
import { DefaultComponent } from '../desktopViews/default.component';

import { AuthenticationService } from '../services/authentication.service'

import {CORE_DIRECTIVES} from '@angular/common';

@Component({
  selector: 'my-mobile-content',
  providers: [AuthenticationService],
  template: `
  
      <div id="headerBar" class="row divLine" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px; background-color:lightgray;">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a href="\" class="btn btn-link"><h1>LibSoft Mobile</h1></a>
          </div>
        </div>
        <div>
        </div>
      </div>
      <div class="row">
        <div class="collapse navbar-collapse" id="navigationbar">
        <ul class="nav navbar-nav">
          <li class="active"><a href="./Index.html">Startseite</a></li>
          <li><a href="./Rueckblick.html">R&uuml;ckblick</a></li>
          <li><a href="./Wettbewerb.html">Wettbewerb</a>
          <li><a href="./anmelden.html">Anmelden</a>
          <li><a href="./sponsoren.html">Sponsoren</a>
        </ul>
        </div><!-- /.navbar-collapse -->
        <div class="col-md-10" style="margin-left:0;width:83.33332%">
          <router-outlet></router-outlet>
        </div>
      </div>
  `,
  directives: [LoginComponent, ROUTER_DIRECTIVES]
})

export class MobileContentComponent {

    public authService: AuthenticationService;

    constructor(
      private _service:AuthenticationService){
          this.authService = _service;
      }
 
    ngOnInit(){
        console.log("My-Mobile-Content init");
    }

    getName() {
        return this._service.getName()
    }
 
    logout() {
        this._service.logout();
    }
}
