import {Component} from '@angular/core';
import {AuthenticationService, User} from '../services/authentication.service';

@Component({
    selector: 'welcome-low-student',
    providers: [AuthenticationService],
    template: `
        <div class="col-md-12">
            This application allows you to reserve books at the library for later pickup. 
            It is also possible to get an overview of your currently lent books.<br><br>
            To get an overview of all books available select <b>Search Books</b>.<br>
            To see your lent books select <b>Lent Books</b>.
        </div>
    	`
})

export class WelcomeLowStudentComponent {
    constructor() {
        }

}