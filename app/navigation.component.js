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
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'my-navigation',
            template: "\n    <div id=\"sidebar-wrapper\">\n      <ul class=\"sidebar-nav\">\n        <li class=\"divLine\">\n          <a href=\"#\">Dashboard</a>\n        </li>\n        <li class=\"divLine\">\n          <a href=\"#\">Shortcuts</a>\n        </li>\n        <li class=\"divLine\">\n          <a href=\"#\">Overview</a>\n        </li>\n        <li class=\"divLine\">\n          <a href=\"#\">Events</a>\n        </li>\n        <li class=\"divLine\">\n          <a href=\"#\">About</a>\n        </li>\n        <li class=\"divLine\">\n          <a href=\"#\">Services</a>\n        </li>\n        <li>\n          <a href=\"#\">Contact</a>\n        </li>\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map