"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var content_component_1 = require('./common/content.component');
var app_routes_1 = require('./app.routes');
var core_1 = require('@angular/core');
var responsive_directives_angular2_1 = require('responsive-directives-angular2');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [responsive_directives_angular2_1.ResponsiveState,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: [responsive_directives_angular2_1.RESPONSIVE_DIRECTIVES], multi: true })]);
platform_browser_dynamic_1.bootstrap(content_component_1.ContentComponent, [
    app_routes_1.APP_ROUTER_PROVIDERS,
    http_1.HTTP_PROVIDERS,
    responsive_directives_angular2_1.ResponsiveState,
    core_1.provide(core_1.PLATFORM_DIRECTIVES, { useValue: [responsive_directives_angular2_1.RESPONSIVE_DIRECTIVES], multi: true })
]);
//# sourceMappingURL=main.js.map