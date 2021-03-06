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
var book_1 = require('../data/book');
var bookInfo_1 = require('../data/bookInfo');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var MobileLendingFormComponent = (function () {
    function MobileLendingFormComponent(dataService, _service, route) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
        this.bookObj = new book_1.Book(-1, false, new bookInfo_1.BookInfo('', '', ''));
        this.untilDate = new Date();
        this.untilDate.setDate(this.untilDate.getDate() + 30);
        this.until = this.untilDate.getDate() + '.' + (this.untilDate.getMonth() + 1) + '.' + this.untilDate.getFullYear();
    }
    MobileLendingFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.checkStaffPrivileges();
        this.sub = this.route.params.subscribe(function (params) {
            _this.student = params['studentid'];
            if (params['bookid'] != undefined) {
                _this.dataService.getBookById(params['bookid']).then(function (b) { return _this.bookObj = b; }).then(function (b) { return _this.book = b.bookInfo.isbn; });
            }
        });
    };
    MobileLendingFormComponent.prototype.lendBook = function () {
        this.dataService.lendBook(this.bookObj, this.student, this.untilDate);
        this.book = '';
        this.student = '';
    };
    MobileLendingFormComponent = __decorate([
        core_1.Component({
            selector: 'lendingform',
            templateUrl: 'app/mobileViews/lendingform.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute])
    ], MobileLendingFormComponent);
    return MobileLendingFormComponent;
}());
exports.MobileLendingFormComponent = MobileLendingFormComponent;
//# sourceMappingURL=mobileLendingForm.component.js.map