import {Component} from '@angular/core';
import {AuthenticationService, User} from '../services/authentication.service';

@Component({
    selector: 'welcome-high',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            Welcome User! <br>
        </div>
    	`
})

export class WelcomeHighComponent {
    constructor() {
        }

}