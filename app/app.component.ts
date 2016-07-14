import { Component } from '@angular/core';

import { ContentComponent } from './common/content.component';

import {AuthenticationService} from './services/authentication.service'


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
        <my-content></my-content>
      </div>
    </div>

    <div *isMobile id="mobileViewContainter" class="container">
      <div id="headerBar" class="row divLine" style="margin-right:0px;padding-left:0px;padding-right:0px;">
        <div class="col-md-12" style="width:100%; padding-left:0;padding-right:0px; background-color:lightgray;">
          <a href="\" class="btn btn-link"><h1>LibSoft Mobile</h1></a>
        </div>
        <div>
        </div>
      </div>
      <div class="row">
        <my-content></my-content>
      </div>
    </div>
  `
})

export class AppComponent { 
}