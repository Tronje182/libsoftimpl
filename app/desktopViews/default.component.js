"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var base_component_1 = require('./base.component');
var profile_service_1 = require('../services/profile.service');
var DefaultComponent = (function (_super) {
    __extends(DefaultComponent, _super);
    function DefaultComponent(_service, _profile) {
        _super.call(this, _profile);
        this._service = _service;
        this._profile = _profile;
    }
    DefaultComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        console.log('test');
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
            template: "\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div>\n                <div>\n                    <h3 class=\"textPrimary\">Welcome to Libsoft, {{getName()}}!</h3>\n                <div>\n                <div id=\"content\" class=\"col-md-12\">\n                </div>\n            </div>\n          </div>\n        </div>\n  "
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, profile_service_1.ProfileService])
    ], DefaultComponent);
    return DefaultComponent;
}(base_component_1.BaseComponent));
exports.DefaultComponent = DefaultComponent;
//# sourceMappingURL=default.component.js.map