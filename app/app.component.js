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
var authentication_service_1 = require('./services/authentication.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n    <div *isDesktop id=\"desktopViewContainter\" class=\"container\">\n      <div id=\"headerBar\" class=\"row divLine\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px; background-color:lightgray;\">\n          <a href=\"\" class=\"btn btn-link\"><h1>LibSoft</h1></a>\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <my-content></my-content>\n      </div>\n    </div>\n\n    <div *isMobile id=\"mobileViewContainter\" class=\"container\">\n      <div id=\"headerBar\" class=\"row divLine\" style=\"margin-right:0px;padding-left:0px;padding-right:0px;\">\n        <div class=\"col-md-12\" style=\"width:100%; padding-left:0;padding-right:0px; background-color:lightgray;\">\n          <a href=\"\" class=\"btn btn-link\"><h1>LibSoft Mobile</h1></a>\n        </div>\n        <div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <my-content></my-content>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map