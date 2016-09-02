"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var common_1 = require('@angular/common');
var base_component_1 = require('./base.component');
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var profile_service_1 = require('../services/profile.service');
var search_component_1 = require('../dynamicComponents/search.component');
var ReservationsComponent = (function (_super) {
    __extends(ReservationsComponent, _super);
    function ReservationsComponent(dataService, _service, router, profile) {
        _super.call(this, profile);
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.profile = profile;
        this.advancedSearchSpace = [{ key: "book.bookInfo.isbn", title: "ISBN" },
            { key: "book.bookInfo.title", title: "Title" },
            { key: "book.bookInfo.title", title: "Author" },
            { key: "student.id", title: "Student ID" }];
    }
    ReservationsComponent.prototype.getReservations = function () {
        var _this = this;
        this.dataService.getBookReservations().then(function (books) { return _this.books = books; });
    };
    ReservationsComponent.prototype.ngOnInit = function () {
        this._service.checkStaffPrivileges();
        this.isDisabled = true;
        this.getReservations();
    };
    ReservationsComponent.prototype.onSelect = function (book) {
        if (this.selectedBook === book) {
            this.selectedBook = undefined;
            this.isDisabled = true;
        }
        else {
            this.selectedBook = book;
            this.isDisabled = false;
        }
    };
    ReservationsComponent.prototype.unselectReservation = function () {
        this.selectedBook = undefined;
        this.isDisabled = true;
    };
    ReservationsComponent.prototype.issueBook = function () {
        this.router.navigate(['/lendingForm', { studentid: this.selectedBook.student.id, bookid: this.selectedBook.book.id }]);
    };
    ReservationsComponent.prototype.filterUpdated = function (val) {
        this.filterBy = JSON.stringify(val);
    };
    ReservationsComponent = __decorate([
        core_1.Component({
            selector: 'book-reservations',
            templateUrl: 'app/desktopViews/reservations.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.ReservationsPipe],
            directives: [common_1.NgClass, search_component_1.SearchComponent]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router, profile_service_1.ProfileService])
    ], ReservationsComponent);
    return ReservationsComponent;
}(base_component_1.BaseComponent));
exports.ReservationsComponent = ReservationsComponent;
//# sourceMappingURL=reservations.component.js.map