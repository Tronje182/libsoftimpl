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
var WelcomeLowStudentComponent = (function () {
    function WelcomeLowStudentComponent() {
    }
    WelcomeLowStudentComponent = __decorate([
        core_1.Component({
            selector: 'welcome-low-student',
            template: "\n        <div class=\"col-md-12\">\n            This application allows you to reserve books at the library for later pickup. \n            It is also possible to get an overview of your currently lent books.<br><br>\n            To get an overview of all books available select <b>Search Books</b>.<br>\n            To see your lent books select <b>Lent Books</b>.\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeLowStudentComponent);
    return WelcomeLowStudentComponent;
}());
exports.WelcomeLowStudentComponent = WelcomeLowStudentComponent;
//# sourceMappingURL=welcomeLowStudent.component.js.map