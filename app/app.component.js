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
var nools_service_1 = require('./services/nools.service');
var profile_1 = require('./helper/profile');
var AppComponent = (function () {
    function AppComponent(_service, flow) {
        this._service = _service;
        this.flow = flow;
        this.profile = new profile_1.Profile();
        this.authService = _service;
    }
    AppComponent.prototype.ngOnInit = function () {
        var session = this.flow.getSession();
        this.profile.setPlatformType('mobile');
        this.profile.setUserProfile('student');
        session.assert(this.profile);
        //now fire the rules
        session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
            else {
                console.log("done");
                console.log(this.profile);
            }
        });
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n    <div id=\"desktopViewContainter\" class=\"container\"> <!-- headerBarClass: row divLine -->\n      <div id=\"headerBar\" [ngClass]=\"profile.displayProperties.headerBarClass\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px; background-color:lightgray;\">\n          <a href=\"\" class=\"btn btn-link\"><img src=\"./app/ressources/images/logo_transparent.png\" alt=\"LibSoft\" height=\"115\" width=\"175\"></a>\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class=\"row\">\n\n        <nav [ngClass]=\"profile.displayProperties.navbarContainerClass\"> <!-- sidebar-navbar col-md-2 | navbar navbar-default navbar-custom -->\n          <div [ngClass]=\"profile.displayProperties.navbarWrapperClass\"> <!-- sidebar-wrapper | container-fluid -->\n            <div [ngClass]=\"profile.displayProperties.navbarHeaderClass\"> <!-- hide this | navbar-header -->\n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-nav\"> <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a href=\"\" class=\"navbar-brand\">LibSoft</a>\n            </div>\n\n            <div [ngClass]=\"profile.displayProperties.navbarCollapseClass\" id=\"bs-nav\"> <!-- nothing | navbar-collapse collapse -->\n              <ul [ngClass]=\"profile.displayProperties.navbarItemListClass\">        <!-- sidebar-nav | nav navbar-nav -->\n                <li class=\"divLine\" *ngIf=\"authService.isStudent()\">\n                  <a href=\"lentBooks\">Lent Books</a>\n                </li>\n                <li class=\"divLine\" *ngIf=\"authService.isStudent() || authService.isStaff()\">\n                  <a href=\"searchBooks\">Search Books</a>\n                </li>\n                <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n                  <a href=\"students\">Search Students</a>\n                </li>\n                <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n                  <a href=\"\\reservations\">View Reservations</a>\n                </li>\n                <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n                  <a href=\"lendingForm\">View Lending Form</a>\n                </li>\n              </ul>              \n            </div>\n          </div>\n        </nav>\n\n        <div [ngClass]=\"profile.displayProperties.routerOutletClass\" style=\"margin-left:0;padding-right:0px;width:83.33332%\">\n          <router-outlet></router-outlet>\n        </div>\n\n      </div>\n    </div>\n  ",
            directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES, common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, nools_service_1.NoolsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map