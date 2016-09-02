import {Component} from '@angular/core';
import {User} from '../services/authentication.service';

@Component({
    selector: 'welcome-low-staff',
    template: `
        <div class="container" >
            This application allows you to view reservations and issue books.<br><br>
            To get an overview of all books available select <b>Search Books</b>.<br>
            To inspect a students account select <b>Search Students</b>.<br>
            To get an overview of all reservations select <b>View Reservations</b>.<br>
            To issue a book select <b>View Lending Form</b>.<br>
            To see your lent books select <b>Lent Books</b>.
        </div>
    	`
})

export class WelcomeLowStaffComponent {
    constructor() {
        }

}