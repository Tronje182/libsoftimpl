import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service'

@Component({
  selector: 'my-navigation',
  template: `
    <div id="sidebar-wrapper">
      <ul class="sidebar-nav">
        <li class="divLine">
          <a href="#">Dashboard</a>
        </li>
        <li class="divLine">
          <a href="#">Shortcuts</a>
        </li>
        <li class="divLine">
          <a href="#">Overview</a>
        </li>
        <li class="divLine">
          <a href="#">Events</a>
        </li>
        <li class="divLine">
          <a href="#">About</a>
        </li>
        <li class="divLine">
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  `
})

export class NavigationComponent {
    constructor(
    private _service:AuthenticationService){}
 
    ngOnInit(){
        this._service.checkCredentials();
        console.log("test");
    }

    getName() {
        return this._service.getName()
    }
 
    logout() {
        this._service.logout();
    }
 }