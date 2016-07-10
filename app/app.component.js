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
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n      <div class=\"container-fluid\">\n      <div id=\"headerBar\" class=\"row divLine\" style=\"background-color:lightgray;\">\n        <div>\n        \t<a href=\"\" class=\"btn btn-link\"><h1>LibSoft</h1></a>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div name=\"navbar\" class=\"col-md-2\" style=\" margin-right:0;width:16.66668%\">\n          <div id=\"sidebar-wrapper\">\n            <ul class=\"sidebar-nav\">\n              <li class=\"divLine\">\n                <a href=\"lentBooks\">Lent Books</a>\n              </li>\n              <li class=\"divLine\">\n                <a href=\"searchBooks\">SearchBooks</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div class=\"col-md-10\" style=\"margin-left:0;width:83.33332%\">\n          <div class=\"row\">\n            <div class=\"col-md-12\">\n              <div name=\"content\">\n                <my-content></my-content>\n              </div>\n            </div>\n          </div>\n          <div class=\"row bottomBar\">\n            <div name=\"action\" class=\"divLineTop\">\n              <my-actions></my-actions>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map