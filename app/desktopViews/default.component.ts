import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

import { BaseComponent } from './base.component'

import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'login-form',
  providers: [AuthenticationService],
  template: `
        <div class="row">
          <div class="col-md-12">
            <div>
                <div>
                    <h3 class="textPrimary">Welcome to Libsoft, {{getName()}}!</h3>
                <div>
                <div id="content" class="col-md-12">
                </div>
            </div>
          </div>
        </div>
  `
})

export class DefaultComponent extends BaseComponent {

    constructor(private _service : AuthenticationService, private _profile: ProfileService){
        super(_profile);
    }

    ngOnInit(){
        this._service.checkCredentials();
        console.log('test');
    }

    getName() {
        return this._service.getName();
    }

    logout() {
        this._service.logout();
    }
 }
