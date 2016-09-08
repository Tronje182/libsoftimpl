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
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var resource_service_1 = require('../services/resource.service');
var LendingFormComponent = (function () {
    function LendingFormComponent(dataService, _service, route, _resources) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
        this._resources = _resources;
        this.untilDate = new Date();
        this.untilDate.setDate(this.untilDate.getDate() + 30);
        this.until = this.untilDate.getDate() + '.' + (this.untilDate.getMonth() + 1) + '.' + this.untilDate.getFullYear();
    }
    LendingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.checkStaffPrivileges();
        this.sub = this.route.params.subscribe(function (params) {
            _this.student = params['studentid'];
            _this.dataService.getBookById(params['bookid']).then(function (b) { return _this.bookObj = b; }).then(function (b) { return _this.book = b.bookInfo.isbn; });
        });
    };
    LendingFormComponent.prototype.lendBook = function () {
        this.dataService.lendBook(this.bookObj, this.student, this.untilDate);
        this.book = '';
        this.student = '';
    };
    LendingFormComponent = __decorate([
        core_1.Component({
            selector: 'lending-form',
            templateUrl: 'app/desktopViews/lendingform.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute, resource_service_1.ResourceService])
    ], LendingFormComponent);
    return LendingFormComponent;
}());
exports.LendingFormComponent = LendingFormComponent;
//# sourceMappingURL=lendingform.component.js.map