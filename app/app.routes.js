"use strict";
var router_1 = require('@angular/router');
var login_component_1 = require('./desktopViews/login.component');
var default_component_1 = require('./desktopViews/default.component');
var lentbooks_component_1 = require('./desktopViews/lentbooks.component');
var searchbooks_component_1 = require('./desktopViews/searchbooks.component');
var students_component_1 = require('./desktopViews/students.component');
var reservations_component_1 = require('./desktopViews/reservations.component');
var lendingform_component_1 = require('./desktopViews/lendingform.component');
var studentdetails_component_1 = require('./desktopViews/studentdetails.component');
var mobilelentbooks_component_1 = require('./mobileViews/mobilelentbooks.component');
var mobilelentbooks_details_component_1 = require('./mobileViews/mobilelentbooks.details.component');
var mobileSearchbooks_component_1 = require('./mobileViews/mobileSearchbooks.component');
var mobilesearchbooks_details_component_1 = require('./mobileViews/mobilesearchbooks.details.component');
var mobileStudents_component_1 = require('./mobileViews/mobileStudents.component');
var mobileStudents_details_component_1 = require('./mobileViews/mobileStudents.details.component');
var mobilereservations_component_1 = require('./mobileViews/mobilereservations.component');
var mobileReservations_details_component_1 = require('./mobileViews/mobileReservations.details.component');
var mobileLendingForm_component_1 = require('./mobileViews/mobileLendingForm.component');
exports.routes = [
    {
        path: '',
        redirectTo: '/default',
        pathMatch: 'full'
    },
    {
        path: 'default',
        component: default_component_1.DefaultComponent
    },
    {
        path: 'lentBooks',
        component: lentbooks_component_1.LentBooksComponent
    },
    {
        path: 'searchBooks',
        component: searchbooks_component_1.SearchBooksComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'students',
        component: students_component_1.StudentsComponent
    },
    {
        path: 'reservations',
        component: reservations_component_1.ReservationsComponent
    },
    {
        path: 'lendingForm',
        component: lendingform_component_1.LendingFormComponent
    },
    {
        path: 'studentDetails',
        component: studentdetails_component_1.StudentDetailsComponent
    },
    {
        path: 'mobile/lentBooks',
        component: mobilelentbooks_component_1.MobileLentBooksComponent
    },
    {
        path: 'mobile/lentBooks/details',
        component: mobilelentbooks_details_component_1.MobileLentBooksDetailsComponent
    },
    {
        path: 'mobile/searchBooks',
        component: mobileSearchbooks_component_1.MobileSearchBooksComponent
    },
    {
        path: 'mobile/searchBooks/details',
        component: mobilesearchbooks_details_component_1.MobileSearchBooksDetailsComponent
    },
    {
        path: 'mobile/students',
        component: mobileStudents_component_1.MobileStudentsComponent
    },
    {
        path: 'mobile/students/details',
        component: mobileStudents_details_component_1.MobileStudentDetailsComponent
    },
    {
        path: 'mobile/reservations',
        component: mobilereservations_component_1.MobileReservationsComponent
    },
    {
        path: 'mobile/reservations/details',
        component: mobileReservations_details_component_1.MobileReservationsDetailsComponent
    },
    {
        path: 'mobile/lendingForm',
        component: mobileLendingForm_component_1.MobileLendingFormComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
//# sourceMappingURL=app.routes.js.map