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
var student_1 = require('../data/student');
var bookInfo_1 = require('../data/bookInfo');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var MobileReservationsDetailsComponent = (function () {
    function MobileReservationsDetailsComponent(dataService, _service, route, router) {
        this.dataService = dataService;
        this._service = _service;
        this.route = route;
        this.router = router;
        this.student = new student_1.Student("", "", "", false);
        this.book = new book_1.Book(-1, false, new bookInfo_1.BookInfo("", "", ""));
    }
    MobileReservationsDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._service.checkStaffPrivileges();
        this.sub = this.route.params.subscribe(function (params) {
            var studentid = params['studentid'];
            var bookid = params['bookid'];
            _this.dataService.getStudentById(studentid).then(function (s) { return _this.student = s; });
            _this.dataService.getBookById(bookid).then(function (b) { return _this.book = b; });
        });
    };
    MobileReservationsDetailsComponent.prototype.issueBook = function () {
        this.router.navigate(['/mobile/lendingForm', { studentid: this.student.id, bookid: this.book.id }]);
    };
    MobileReservationsDetailsComponent = __decorate([
        core_1.Component({
            selector: 'studentdetails',
            templateUrl: 'app/mobileViews/reservations.component.details.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.ActivatedRoute, router_1.Router])
    ], MobileReservationsDetailsComponent);
    return MobileReservationsDetailsComponent;
}());
exports.MobileReservationsDetailsComponent = MobileReservationsDetailsComponent;
//# sourceMappingURL=mobileReservations.details.component.js.map