import {Component, Input, Output, EventEmitter, OnChanges, SimpleChange} from '@angular/core';
import { RouterLink} from '@angular/router';

import { ProfileService } from '../services/profile.service';

@Component({
    selector: 'navigation-component',
    template: `
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
                <li class="divLine borderSecondary" *ngFor="#entry of navItems">
                  <a href="{{entry.path}}" class="textPrimary">{{entry.text}}</a>
                </li>
              </ul>              
            </div>
          </div>
        </nav>
    	`,
    directives: [ RouterLink ]
})

export class NavigationComponent implements OnChanges{
    @Input() navItems: Object[] = [];

    constructor(private profile: ProfileService) {
    }

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for (let propName in changes) { 
            let changedProp = changes[propName];
        }
    }
}