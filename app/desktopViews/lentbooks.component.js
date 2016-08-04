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
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var nools_service_1 = require('../services/nools.service');
var profile_1 = require('../helper/profile');
var LentBooksComponent = (function () {
    function LentBooksComponent(dataService, _service, flow) {
        this.dataService = dataService;
        this._service = _service;
        this.flow = flow;
        this.profile = new profile_1.Profile();
    }
    LentBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getLendings(this._service.getId()).then(function (bookLendings) { return _this.bookLendings = bookLendings; });
    };
    LentBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.getLendings();
        var session = this.flow.getSession();
        this.profile.setPlatformType('mobile');
        this.profile.setUserProfile('student');
        session.assert(this.profile);
        //now fire the rules
        session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
            else {
                console.log("done");
                console.log(this.profile);
            }
        });
    };
    LentBooksComponent.prototype.onSelect = function (bookLending) {
        if (this.selectedLending === bookLending) {
            this.selectedLending = undefined;
        }
        else {
            this.selectedLending = bookLending;
        }
    };
    LentBooksComponent = __decorate([
        core_1.Component({
            selector: 'lent-books',
            templateUrl: 'app/desktopViews/lentbooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, nools_service_1.NoolsService])
    ], LentBooksComponent);
    return LentBooksComponent;
}());
exports.LentBooksComponent = LentBooksComponent;
//# sourceMappingURL=lentbooks.component.js.map