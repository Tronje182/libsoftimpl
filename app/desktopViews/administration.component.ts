import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../data/book';
import { BookLending } from '../data/bookLending';

import { DataService } from '../services/data.service';
import { AuthenticationService } from '../services/authentication.service';
import { ResourceService } from '../services/resource.service';

@Component({
  selector: 'administration',
  templateUrl: 'app/desktopViews/administration.component.html',
  providers: [DataService,AuthenticationService]
})

export class AdministrationComponent {

  constructor(
    private dataService: DataService,
    private _service:AuthenticationService,
    private route: ActivatedRoute, 
    private _resources: ResourceService
  ) {
  }

  ngOnInit() {
    this._service.checkStaffPrivileges();
    this._service.checkAdminPrivileges();

  }
}