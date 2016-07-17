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
var ReservationsComponent = (function () {
    function ReservationsComponent(dataService, _service, router) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
    }
    ReservationsComponent.prototype.getReservations = function () {
        var _this = this;
        this.dataService.getBookReservations().then(function (books) { return _this.books = books; });
    };
    ReservationsComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
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
    ReservationsComponent.prototype.issueBook = function () {
        this.router.navigate(['/lendingForm', { studentid: this.selectedBook.student.id, bookid: this.selectedBook.book.id }]);
    };
    ReservationsComponent = __decorate([
        core_1.Component({
            selector: 'book-reservations',
            templateUrl: 'app/desktopViews/reservations.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router])
    ], ReservationsComponent);
    return ReservationsComponent;
}());
exports.ReservationsComponent = ReservationsComponent;
//# sourceMappingURL=reservations.component.js.map