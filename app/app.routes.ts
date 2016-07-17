import { provideRouter, RouterConfig }  from '@angular/router';

import { ContentComponent } from './common/content.component';

import { LoginComponent } from './desktopViews/login.component';
import { DefaultComponent } from './desktopViews/default.component';
import { LentBooksComponent } from './desktopViews/lentbooks.component';
import { SearchBooksComponent } from './desktopViews/searchbooks.component';
import { StudentsComponent } from './desktopViews/students.component';
import { ReservationsComponent } from './desktopViews/reservations.component';
import { LendingFormComponent } from './desktopViews/lendingform.component';
import { StudentDetailsComponent } from './desktopViews/studentdetails.component';

import { MobileLentBooksComponent } from './mobileViews/mobilelentbooks.component';
import { MobileLentBooksDetailsComponent } from './mobileViews/mobilelentbooks.details.component';
import { MobileSearchBooksComponent } from './mobileViews/mobileSearchbooks.component';
import { MobileSearchBooksDetailsComponent } from './mobileViews/mobilesearchbooks.details.component';
import { MobileStudentsComponent } from './mobileViews/mobileStudents.component';
import { MobileStudentDetailsComponent } from './mobileViews/mobileStudents.details.component';
import { MobileReservationsComponent } from './mobileViews/mobilereservations.component';
import { MobileReservationsDetailsComponent } from './mobileViews/mobileReservations.details.component';
import { MobileLendingFormComponent } from './mobileViews/mobileLendingForm.component';

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
    path: 'mobile/lentBooks',
    component: MobileLentBooksComponent
  },
  {
    path: 'mobile/lentBooks/details',
    component: MobileLentBooksDetailsComponent
  },
  {
    path: 'mobile/searchBooks',
    component: MobileSearchBooksComponent
  },
  {
    path: 'mobile/searchBooks/details',
    component: MobileSearchBooksDetailsComponent
  },
  {
    path: 'mobile/students',
    component: MobileStudentsComponent
  },
  {
    path: 'mobile/students/details',
    component: MobileStudentDetailsComponent
  },
  {
    path: 'mobile/reservations',
    component: MobileReservationsComponent
  },
  {
    path: 'mobile/reservations/details',
    component: MobileReservationsDetailsComponent
  },
  {
    path: 'mobile/lendingForm',
    component: MobileLendingFormComponent
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