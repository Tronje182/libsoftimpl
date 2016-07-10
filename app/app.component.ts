import { Component } from '@angular/core';

import { NavigationComponent } from './navigation.component';
import { ActionComponent } from './action.component';
import { ContentComponent } from './content.component';

@Component({
  selector: 'my-app',
  template: `
      <div class="container-fluid">
      <div id="headerBar" class="row divLine" style="background-color:lightgray;">
        <div>
        	<a href="\" class="btn btn-link"><h1>LibSoft</h1></a>
        </div>
      </div>
      <div class="row">
        <div name="navbar" class="col-md-2" style=" margin-right:0;width:16.66668%">
          <div id="sidebar-wrapper">
            <ul class="sidebar-nav">
              <li class="divLine">
                <a href="\lentBooks">Lent Books</a>
              </li>
              <li class="divLine">
                <a href="\searchBooks">SearchBooks</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-10" style="margin-left:0;width:83.33332%">
          <div class="row">
            <div class="col-md-12">
              <div name="content">
                <my-content></my-content>
              </div>
            </div>
          </div>
          <div class="row bottomBar">
            <div name="action" class="divLineTop">
              <my-actions></my-actions>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})

export class AppComponent { }