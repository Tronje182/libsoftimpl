import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './desktopViews/login.component';
import { DefaultComponent } from './desktopViews/default.component';
import { LentBooksComponent } from './desktopViews/lentbooks.component';
import { SearchBooksComponent } from './desktopViews/searchbooks.component';
import { StudentsComponent } from './desktopViews/students.component';
import { ReservationsComponent } from './desktopViews/reservations.component';
import { LendingFormComponent } from './desktopViews/lendingform.component';
import { StudentDetailsComponent } from './desktopViews/studentdetails.component';
import { AdministrationComponent } from './desktopViews/administration.component';

export const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/default',
    pathMatch: 'full'
  },
  {
    path: 'default',
    component: DefaultComponent
  },
  {
    path: 'lentBooks',
    component: LentBooksComponent
  },
  {
    path: 'searchBooks',
    component: SearchBooksComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'students',
    component: StudentsComponent
  },
  {
    path: 'reservations',
    component: ReservationsComponent
  },
  {
    path: 'lendingForm',
    component: LendingFormComponent
  },
  {
    path: 'studentDetails',
    component: StudentDetailsComponent
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
