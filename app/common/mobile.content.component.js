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
var MobileContentComponent = (function () {
    function MobileContentComponent(_service) {
        this._service = _service;
        this.authService = _service;
    }
    MobileContentComponent.prototype.ngOnInit = function () {
        console.log("My-Mobile-Content init");
    };
    MobileContentComponent.prototype.getName = function () {
        return this._service.getName();
    };
    MobileContentComponent.prototype.logout = function () {
        this._service.logout();
    };
    MobileContentComponent = __decorate([
        core_1.Component({
            selector: 'my-mobile-content',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n  \n      <div id=\"headerBar\" class=\"row divLine\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px; background-color:lightgray;\">\n          <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a href=\"\" class=\"btn btn-link\"><h1>LibSoft Mobile</h1></a>\n          </div>\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"collapse navbar-collapse\" id=\"navigationbar\">\n        <ul class=\"nav navbar-nav\">\n          <li class=\"active\"><a href=\"./Index.html\">Startseite</a></li>\n          <li><a href=\"./Rueckblick.html\">R&uuml;ckblick</a></li>\n          <li><a href=\"./Wettbewerb.html\">Wettbewerb</a>\n          <li><a href=\"./anmelden.html\">Anmelden</a>\n          <li><a href=\"./sponsoren.html\">Sponsoren</a>\n        </ul>\n        </div><!-- /.navbar-collapse -->\n        <div class=\"col-md-10\" style=\"margin-left:0;width:83.33332%\">\n          <router-outlet></router-outlet>\n        </div>\n      </div>\n  ",
            directives: [login_component_1.LoginComponent, router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], MobileContentComponent);
    return MobileContentComponent;
}());
exports.MobileContentComponent = MobileContentComponent;
//# sourceMappingURL=mobile.content.component.js.map