import {Component} from '@angular/core';
import {AuthenticationService, User} from '../services/authentication.service';

import { ResourceService } from '../services/resource.service';

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            <div class="title">
                {{_resources.getLangString('welcome')}}
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.email" id="email" 
                            type="email" class="validate">
                        <label for="email">{{_resources.getLangString('email')}}</label>
                    </div>
                </div>
 
                <div class="row">
                    <div class="input-field col s12">
                        <input [(ngModel)]="user.password" id="password" 
                            type="password" class="validate">
                        <label for="password">{{_resources.getLangString('password')}}</label>
                    </div>
                </div>
 
                <span>{{errorMsg}}</span>
                <button (click)="login()" 
                    class="btn waves-effect waves-light" 
                    type="submit" name="action">{{_resources.getLangString('login')}}</button>
            </div>
        </div>
    	`
})

export class LoginComponent {

    public user = new User('','','','','','');
    public errorMsg = '';
    public authService: AuthenticationService;

    constructor(
        private _service:AuthenticationService, private _resources: ResourceService) {
            this.authService = _service;
        }

    login() {
        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }
}