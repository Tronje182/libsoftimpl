import { Component } from '@angular/core';

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

export class NavigationComponent { }