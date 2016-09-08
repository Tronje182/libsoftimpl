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
var profile_service_1 = require('../services/profile.service');
var resource_service_1 = require('../services/resource.service');
var NavigationComponent = (function () {
    function NavigationComponent(profile, resources) {
        this.profile = profile;
        this.resources = resources;
        this.navItems = [];
    }
    NavigationComponent.prototype.ngOnChanges = function (changes) {
        for (var propName in changes) {
            var changedProp = changes[propName];
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], NavigationComponent.prototype, "navItems", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'navigation-component',
            template: "\n        <nav [ngClass]=\"profile.getProfile().displayProperties.navbarContainerClass\"> \n          <div [ngClass]=\"profile.getProfile().displayProperties.navbarWrapperClass\"> \n            <div [ngClass]=\"profile.getProfile().displayProperties.navbarHeaderClass\"> \n              <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"#bs-nav\"> <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n              </button>\n              <a href=\"\" class=\"navbar-brand\">LibSoft</a>\n            </div>\n\n            <div [ngClass]=\"profile.getProfile().displayProperties.navbarCollapseClass\" id=\"bs-nav\">\n              <ul [ngClass]=\"profile.getProfile().displayProperties.navbarItemListClass\">\n                <li class=\"divLine borderSecondary\" *ngFor=\"#entry of navItems\">\n                  <a href=\"{{entry.path}}\" class=\"textPrimary\">{{resources.getLangString(entry.key)}}</a>\n                </li>\n              </ul>              \n            </div>\n          </div>\n        </nav>\n    \t",
            directives: [router_1.RouterLink]
        }), 
        __metadata('design:paramtypes', [profile_service_1.ProfileService, resource_service_1.ResourceService])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map