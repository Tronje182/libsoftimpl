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
var common_1 = require('@angular/common');
var myfilter_pipe_1 = require('../helper/myfilter.pipe');
var data_service_1 = require('../services/data.service');
var authentication_service_1 = require('../services/authentication.service');
var nools_service_1 = require('../services/nools.service');
var profile_service_1 = require('../services/profile.service');
var SearchBooksComponent = (function () {
    function SearchBooksComponent(dataService, _service, router, profile, flow) {
        this.dataService = dataService;
        this._service = _service;
        this.router = router;
        this.profile = profile;
        this.flow = flow;
        this.authService = _service;
    }
    SearchBooksComponent.prototype.getLendings = function () {
        var _this = this;
        this.dataService.getBooks().then(function (books) { return _this.books = books; }).then(function (books) { return _this.findSelectedBook(); });
    };
    SearchBooksComponent.prototype.findSelectedBook = function () {
        var _this = this;
        if (this.selectedBook != undefined) {
            this.selectedBook = this.books.find(function (books) { return books.id == _this.selectedBook.id; });
            if (this.selectedBook.status === true) {
                this.isDisabledIssueBook = false;
                this.isDisabledReturnBook = true;
            }
            else {
                this.isDisabledIssueBook = true;
                this.isDisabledReturnBook = false;
            }
        }
    };
    SearchBooksComponent.prototype.ngOnInit = function () {
        this._service.checkCredentials();
        this.isDisabledIssueBook = true;
        this.isDisabledReturnBook = true;
        this.getLendings();
        var session = this.flow.getSession();
        session.assert(this.profile.getProfile());
        //now fire the rules
        session.match(function (err) {
            if (err) {
                console.error(err.stack);
            }
            else {
                console.log("done");
            }
        });
    };
    SearchBooksComponent.prototype.onSelect = function (book) {
        if (this.selectedBook === book) {
            this.selectedBook = undefined;
            this.isDisabledIssueBook = true;
            this.isDisabledReturnBook = true;
        }
        else {
            if (book.status === true) {
                this.isDisabledIssueBook = false;
                this.isDisabledReturnBook = true;
            }
            else {
                this.isDisabledIssueBook = true;
                this.isDisabledReturnBook = false;
            }
            this.selectedBook = book;
        }
    };
    SearchBooksComponent.prototype.issueBook = function () {
        this.router.navigate(['/lendingForm', { bookid: this.selectedBook.id }]);
    };
    SearchBooksComponent.prototype.returnBook = function () {
        this.dataService.returnBook(this.selectedBook.id);
        this.getLendings();
    };
    SearchBooksComponent.prototype.unselectBook = function () {
        this.selectedBook = undefined;
        this.isDisabledIssueBook = true;
        this.isDisabledReturnBook = true;
    };
    SearchBooksComponent.prototype.reserveBook = function () {
        this.dataService.reserveBook(this.selectedBook.id, this.authService.getId());
        this.getLendings();
    };
    SearchBooksComponent = __decorate([
        core_1.Component({
            selector: 'my-search-books',
            templateUrl: 'app/desktopViews/searchBooks.component.html',
            providers: [data_service_1.DataService, authentication_service_1.AuthenticationService],
            pipes: [myfilter_pipe_1.BooksPipe],
            directives: [common_1.NgClass]
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, authentication_service_1.AuthenticationService, router_1.Router, profile_service_1.ProfileService, nools_service_1.NoolsService])
    ], SearchBooksComponent);
    return SearchBooksComponent;
}());
exports.SearchBooksComponent = SearchBooksComponent;
//# sourceMappingURL=searchbooks.component.js.map