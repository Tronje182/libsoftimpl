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