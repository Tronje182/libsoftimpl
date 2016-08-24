import {Component} from '@angular/core';
import {AuthenticationService, User} from '../services/authentication.service';

@Component({
    selector: 'welcome-low',
    providers: [AuthenticationService],
    template: `
        <div class="container" >
            Welcome to LibSoft. <br>
            This application allows you to reserve books at the library for later pickup. It is also possible to get an overview of your currently lent books.
        </div>
    	`
})

export class WelcomeLowComponent {
    constructor() {
        }

}