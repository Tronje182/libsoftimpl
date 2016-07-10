"use strict";
var router_1 = require('@angular/router');
var default_component_1 = require('./default.component');
var lentbooks_component_1 = require('./lentbooks.component');
var searchbooks_component_1 = require('./searchbooks.component');
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