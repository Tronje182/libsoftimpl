import { provideRouter, RouterConfig }  from '@angular/router';

import { LoginComponent } from './login.component';
import { DefaultComponent } from './default.component';
import { ContentComponent } from './content.component';
import { LentBooksComponent } from './lentbooks.component';
import { SearchBooksComponent } from './searchbooks.component';
import { StudentsComponent } from './students.component';
import { ReservationsComponent } from './reservations.component';
import { LendingFormComponent } from './lendingform.component';

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