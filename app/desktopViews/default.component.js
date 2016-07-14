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
var authentication_service_1 = require('../services/authentication.service');
var DefaultComponent = (function () {
    function DefaultComponent(_service) {
        this._service = _service;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        console.log("test");
    };
    DefaultComponent.prototype.getName = function () {
        return this._service.getName();
    };
    DefaultComponent.prototype.logout = function () {
        this._service.logout();
    };
    DefaultComponent = __decorate([
        core_1.Component({
            selector: 'login-form',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div name=\"content\">\n                <div>\n                    <h3>Welcome to Libsoft, {{getName()}}!</h3>\n                <div>\n                <div>\n                    LibSoft is a software application for students and staff members of the library of the Paderborn University.\n                </div>\n                \n                <a (click)=\"logout()\" href=\"\">Click Here to logout</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row bottomBar\" style=\"height:10%\">\n          <div name=\"action\" class=\"divLineTop\">\n            <my-actions></my-actions>\n          </div>\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
    ], DefaultComponent);
    return DefaultComponent;
}());
exports.DefaultComponent = DefaultComponent;
//# sourceMappingURL=default.component.js.map