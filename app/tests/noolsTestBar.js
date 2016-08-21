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
var profile_service_1 = require('../services/profile.service');
var NoolsTestBarComponent = (function () {
    function NoolsTestBarComponent(_profile) {
        this._profile = _profile;
        this.userWeakVision = _profile.getProfile().getUser().hasWeakVision();
        this.userSelfEfficiacy = _profile.getProfile().getUser().hasHighComputerSelfEfficiacy();
        this.platformType = _profile.getProfile().getPlatform().getPlatformType();
        this.environmentBrightness = _profile.getProfile().getEnvironment().getBrightnessLevel();
    }
    // input for device changed
    NoolsTestBarComponent.prototype.deviceChanged = function () {
        this._profile.setPlatformType(this.platformType);
    };
    // input for vision changed
    NoolsTestBarComponent.prototype.visionChanged = function () {
        this._profile.setWeakVision(this.userWeakVision);
    };
    // input for self efficiacy changed
    NoolsTestBarComponent.prototype.selfEfficiacyChanged = function () {
        this._profile.setComputerSelfEfficiacy(this.userSelfEfficiacy);
    };
    // input for environment brightness changed
    NoolsTestBarComponent.prototype.brightnessChanged = function () {
        this._profile.setBrightnessLevel(this.environmentBrightness);
    };
    NoolsTestBarComponent = __decorate([
        core_1.Component({
            selector: 'noolstestbar',
            template: "\n        <div class=\"row container\" >\n            <div class=\"col-sm-3\">\n                <div class=\"form-inline form-group\">\n                    <label for=\"deviceSelect\">Device</label>\n                    <select class=\"form-control\" id=\"deviceSelect\" [(ngModel)]=\"platformType\" (ngModelChange)=\"deviceChanged()\">\n                        <option value=\"desktop\">desktop</option>\n                        <option value=\"mobile\">mobile</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-inline form-group\">\n                    <label for=\"visionSelect\">Vision?</label>\n                    <select class=\"form-control\" id=\"visionSelect\" [(ngModel)]=\"userWeakVision\" (ngModelChange)=\"visionChanged()\">\n                        <option value=\"false\">no</option>\n                        <option value=\"true\">yes</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-inline form-group\">\n                    <label for=\"seSelect\">Self-efficiacy?</label>\n                    <select class=\"form-control\" id=\"seSelect\" [(ngModel)]=\"userSelfEfficiacy\" (ngModelChange)=\"selfEfficiacyChanged()\">\n                        <option value=\"false\">no</option>\n                        <option value=\"true\">yes</option>\n                    </select>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-inline form-group\">\n                    <label for=\"brightnessLevel\">Brightness</label>\n                    <input class=\"form-control\" type=\"range\" id=\"brightnessLevel\" min=\"0\" max=\"100\" [(ngModel)]=\"environmentBrightness\" (ngModelChange)=\"brightnessChanged()\"> {{environmentBrightness}}\n                </div>\n            </div>\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService])
    ], NoolsTestBarComponent);
    return NoolsTestBarComponent;
}());
exports.NoolsTestBarComponent = NoolsTestBarComponent;
//# sourceMappingURL=noolstestBar.js.map