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
var WelcomeLowStaffComponent = (function () {
    function WelcomeLowStaffComponent() {
    }
    WelcomeLowStaffComponent = __decorate([
        core_1.Component({
            selector: 'welcome-low-staff',
            providers: [authentication_service_1.AuthenticationService],
            template: "\n        <div class=\"container\" >\n            This application allows you to view reservations and issue books.<br><br>\n            To get an overview of all books available select <b>Search Books</b>.<br>\n            To inspect a students account select <b>Search Students</b>.<br>\n            To get an overview of all reservations select <b>View Reservations</b>.<br>\n            To issue a book select <b>View Lending Form</b>.<br>\n            To see your lent books select <b>Lent Books</b>.\n        </div>\n    \t"
        }), 
        __metadata('design:paramtypes', [])
    ], WelcomeLowStaffComponent);
    return WelcomeLowStaffComponent;
}());
exports.WelcomeLowStaffComponent = WelcomeLowStaffComponent;
//# sourceMappingURL=welcomeLowStaff.component.js.map