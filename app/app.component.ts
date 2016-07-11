import { Component } from '@angular/core';

import { ContentComponent } from './content.component';

import {AuthenticationService} from './authentication.service'

@Component({
  selector: 'my-app',
  providers: [AuthenticationService],
  template: `
      <div class="container-fluid">
      <div id="headerBar" class="row divLine" style="background-color:lightgray;">
        <div>
        	<a href="\" class="btn btn-link"><h1>LibSoft</h1></a>
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