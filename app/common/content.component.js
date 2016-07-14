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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var login_component_1 = require('../desktopViews/login.component');
var authentication_service_1 = require('../services/authentication.service');
var ContentComponent = (function () {
    function ContentComponent(_service) {
        this._service = _service;
        this.authService = _service;
    }
    ContentComponent.prototype.ngOnInit = function () {
        console.log("My-Content init");
    };
    ContentComponent.prototype.getName = function () {
        return this._service.getName();
    };
    ContentComponent.prototype.logout = function () {
        this._service.logout();
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'my-content',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n      <div id=\"navbar\" class=\"col-md-2\">\n        <div id=\"sidebar-wrapper\">\n          <ul class=\"sidebar-nav\">\n            <li class=\"divLine\" *ngIf=\"authService.isStudent()\">\n              <a *isDesktop href=\"lentBooks\">Lent Books</a>\n              <a *isMobile href=\"mobilelentBooks\">Lent Books</a>\n            </li>\n            <li class=\"divLine\" *ngIf=\"authService.isStudent() || authService.isStaff()\">\n              <a *isDesktop href=\"searchBooks\">Search Books</a>\n              <a *isMobile href=\"mobilesearchBooks\">Search Books</a>\n            </li>\n            <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n              <a *isDesktop href=\"students\">Search Students</a>\n              <a *isMobile href=\"mobilestudents\">Search Students</a>\n            </li>\n            <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n              <a *isDesktop href=\"\\reservations\">View Reservations</a>\n              <a *isMobile href=\"mobile\\reservations\">View Reservations</a>\n            </li>\n            <li class=\"divLine\" *ngIf=\"authService.isStaff()\">\n              <a *isDesktop href=\"lendingForm\">View Lending Form</a>\n              <a *isMobile href=\"mobilelendingForm\">View Lending Form</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-md-10\" style=\"margin-left:0;width:83.33332%\">\n        <router-outlet></router-outlet>\n      </div>\n  ",
            directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;
//# sourceMappingURL=content.component.js.map