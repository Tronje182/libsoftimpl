"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var login_component_1 = require('./desktopViews/login.component');
var authentication_service_1 = require('./services/authentication.service');
var profile_service_1 = require('./services/profile.service');
var noolstestBar_1 = require('./tests/noolstestBar');
var navigation_component_1 = require('./dynamicComponents/navigation.component');
var AppComponent = (function () {
    function AppComponent(_service, profile) {
        this._service = _service;
        this.profile = profile;
        this.authService = _service;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n    <noolstestbar></noolstestbar>\n    <div id=\"desktopViewContainter\" class=\"container\"> \n      <div id=\"headerBar\" [ngClass]=\"profile.getProfile().displayProperties.headerBarClass\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px;\">\n          <a href=\"\" class=\"btn btn-link\"><img src=\"./app/ressources/images/logo_transparent.png\" alt=\"LibSoft\" height=\"115\" width=\"175\"></a>\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <navigation-component [navItems]=\"profile.getProfile().displayProperties.navigation\"></navigation-component>\n\n        <div [ngClass]=\"profile.getProfile().displayProperties.routerOutletClass\" style=\"margin-left:0;padding-right:0px;width:83.33332%\">\n          <router-outlet></router-outlet>\n        </div>\n\n      </div>\n    </div>\n  ",
            directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES, common_1.NgClass, noolstestBar_1.NoolsTestBarComponent, navigation_component_1.NavigationComponent]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, profile_service_1.ProfileService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map